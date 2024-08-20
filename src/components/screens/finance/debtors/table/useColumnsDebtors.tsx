import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { UiTag } from "src/components/ui";
import { TFinanceDebtors } from "src/services/index.types";
import { phoneFormatter, priceFormatter } from "src/utils";

export const useColumnsDebtors = () => {
	const columns: ColumnsType<TFinanceDebtors> = [
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
			dataIndex: "student",
			key: "student",
			render: (student: TFinanceDebtors["student"], debtor) => student ? (
				<Link to={`/groups/${debtor?.group?.id}/students/${student?.id}`}>{`${student?.first_name} ${student?.last_name}`}</Link>
			) : "-",
		},
		{
			ellipsis: true,
			title: "Телефон",
			dataIndex: "student",
			key: "phone",
			render: (student: TFinanceDebtors["student"]) =>
				phoneFormatter(student?.phone),
		},
		{
			ellipsis: true,
			title: "Баланс",
			dataIndex: "balance",
			key: "balance",
			render: (balance) => (
				<UiTag color={"red"} bordered={false}>{priceFormatter(balance)}</UiTag>
			),
		},
		{
			ellipsis: true,
			title: "Группа",
			dataIndex: "group",
			key: "group",
			render: (group: TFinanceDebtors["group"]) => group ? (
				<Link to={`/groups/${group?.id}`}>{group?.name}</Link>
			) : "-",
		},
	];

	return columns;
};
