import { EyeFilled } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";
import { UiTag, UiTooltipButton } from "src/components/ui";
import { TStudent } from "src/services/index.types";
import { phoneFormatter, priceFormatter } from "src/utils";

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
			title: "Имя Фамилия",
			dataIndex: "name",
			key: "name",
			render: (_, student) => `${student?.first_name} ${student?.last_name}`,
		},
		{
			ellipsis: true,
			title: "Телефон",
			dataIndex: "phone",
			key: "phone",
			render: phoneFormatter,
		},
		{
			align: "center",
			ellipsis: true,
			title: "Баланс",
			dataIndex: "balance",
			key: "balance",
			render: (balance: TStudent["balance"]) => (
				<UiTag color={Number(balance?.total_amount) >= 0 ? "green" : "red"}>
					{priceFormatter(balance?.total_amount)}
				</UiTag>
			),
		},
		{
			fixed: "right",
			width: 50,
			align: "center",
			title: "Действия",
			key: "actions",
			render: (_v, student) => (
				<UiTooltipButton
					title="Смотреть"
					showTitle={true}
					shape={"circle"}
					icon={<EyeFilled />}
					onClick={() => navigate(`students/${student.id}`)}
					aria-label="View"
				/>
			),
		},
	];

	return columns;
};
