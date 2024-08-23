import {
	Space,
	Tooltip,
} from "antd";
import {
	DeleteOutlined,
	EyeFilled,
} from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { ColumnsType } from "antd/es/table";
import { GlobalPopconfirm } from "src/components/shared";
import { UiButton } from "src/components/ui";
import { useDeleteGroupsStudentsMutation } from "src/services/groups/groups.api";
import { TStudent } from "src/services/index.types";
import { phoneFormatter } from "src/utils";

export const useColumnsStudents = () => {
	const navigate = useNavigate();
	const { group_id } = useParams();

	const { mutate: deleteStudent } = useDeleteGroupsStudentsMutation(group_id);

	const columns: ColumnsType<TStudent> = [
		{
			width: 50,
			ellipsis: true,
			title: "№",
			dataIndex: "index",
			key: "index",
			render: (_v, _r, index) => index + 1,
		},
		{
			ellipsis: true,
			title: "Студент",
			dataIndex: "name",
			key: "name",
			render: (_, student) => `${student.first_name} ${student.last_name}`,
		},
		{
			ellipsis: true,
			title: "Телефон",
			dataIndex: "phone",
			key: "phone",
			render: phoneFormatter,
		},
		// {
		// 	align: "center",
		// 	ellipsis: true,
		// 	title: "Оплата",
		// 	dataIndex: "payment_history",
		// 	key: "payment_check",
		// 	render: (payment_history: boolean) => (
		// 		<ApproveCheck isValue={payment_history} />
		// 	),
		// },
		{
			fixed: "right",
			width: 100,
			align: "center",
			title: "Действия",
			key: "actions",
			render: (_v, student) => (
				<Space onClick={(e) => e.stopPropagation()}>
					<Tooltip title="Смотреть">
						<UiButton
							type={"primary"}
							shape={"circle"}
							icon={<EyeFilled />}
							onClick={() => navigate(`students/${student.id}`)}
							aria-label="View"
						/>
					</Tooltip>
					<GlobalPopconfirm
						title={`${student.first_name} ${student.last_name}`}
						onConfirm={() => deleteStudent({ student_id: [student.id] })}
					>
						<UiButton
							type={"primary"}
							shape={"circle"}
							danger={true}
							icon={<DeleteOutlined />}
							aria-label="Delete"
						/>
					</GlobalPopconfirm>
				</Space>
			),
		},
	];

	return columns;
};
