import {
	Space,
	Tooltip,
} from "antd";
import {
	EyeFilled,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ColumnsType } from "antd/es/table";
import { UiButton } from "src/components/ui";
import { TStudent } from "src/services/index.types";
import { phoneFormatter } from "src/utils";

export const useColumnsStudents = () => {
	const navigate = useNavigate();

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
			dataIndex: "first_name",
			key: "full_name",
			render: (_, n) => `${n.first_name} ${n.last_name}`,
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
				<Space>
					<Tooltip title="Смотреть">
						<UiButton
							type="primary"
							icon={<EyeFilled />}
							onClick={() => navigate(`students/${student.id}`)}
							aria-label="View"
						/>
					</Tooltip>
				</Space>
			),
		},
	];

	return columns;
};
