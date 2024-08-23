import { Space, Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";
import { DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { GlobalPopconfirm } from "src/components/shared";
import { UiButton, UiTag } from "src/components/ui";
import { useDeleteAcceptanceMutation, useEditAcceptanceMutation } from "src/services/index.api";
import { TAcceptance } from "src/services/index.types";
import { completeColor, completeIcon, phoneFormatter } from "src/utils";

export const useColumnsAcceptance = () => {
	const { mutate: deleteAcceptance } = useDeleteAcceptanceMutation();
	const { mutate: acceptAcceptance } = useEditAcceptanceMutation();

	const columns: ColumnsType<TAcceptance> = [
		{
			ellipsis: true,
			title: "Студент",
			dataIndex: "student",
			key: "name",
			render: (student: TAcceptance["student"]) => `${student?.first_name} ${student?.last_name}`,
		},
		{
			ellipsis: true,
			title: "Телефон",
			dataIndex: "student",
			key: "phone",
			render: (student: TAcceptance["student"]) => phoneFormatter(student?.phone),
		},
		{
			ellipsis: true,
			title: "Группа",
			dataIndex: "group",
			key: "group",
			render: (group: TAcceptance["group"]) => (
				<Link to={`/groups/${group.id}`}>
					{group.name}
				</Link>
			),
		},
		{
			ellipsis: true,
			align: "center",
			title: "Статус",
			dataIndex: "is_acceptance",
			key: "is_acceptance",
			render: (is_acceptance: boolean) => (
				<UiTag
					icon={completeIcon(is_acceptance)}
					color={completeColor(is_acceptance)}>
					{is_acceptance ? "Подтвержден" : "Ожидание"}
				</UiTag>
			),
		},
		{
			fixed: "right",
			width: 100,
			title: "Действия",
			key: "action",
			render: (_, acceptance) => (
				<Space>
					<Tooltip title="Потвердить">
						<UiButton
							type={"primary"}
							color={"green"}
							disabled={acceptance.is_acceptance}
							icon={<CheckOutlined />}
							onClick={() => {
								acceptAcceptance({
									id: acceptance.id,
									is_acceptance: !acceptance.is_acceptance,
								});
							}}
							aria-label="Accept"
						/>
					</Tooltip>
					<GlobalPopconfirm
						onConfirm={() => deleteAcceptance(acceptance.id)}
						title={`${acceptance.student.last_name}`}
					>
						<Tooltip title="Удалить">
							<UiButton
								type="primary"
								danger
								icon={<DeleteOutlined />}
								aria-label="Delete"
							/>
						</Tooltip>
					</GlobalPopconfirm>
				</Space>
			),
		},
	];

	return columns;
};
