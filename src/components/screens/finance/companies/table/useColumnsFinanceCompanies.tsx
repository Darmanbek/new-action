import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { TTransactionData } from "src/services/index.types";
import { formatEmpty, priceFormatter } from "src/utils";


export const useColumnsFinanceCompanies = () => {

	const columns: ColumnsType<TTransactionData> = [
		{
			ellipsis: true,
			title: "Дата",
			dataIndex: "date",
			key: "date",
			render: formatEmpty
		},
		{
			ellipsis: true,
			title: "Студент",
			dataIndex: "student",
			key: "student",
			render: (student: TTransactionData["student"]) => `${student?.first_name} ${student?.last_name}`
		},
		{
			ellipsis: true,
			title: "Сумма",
			dataIndex: "amount",
			key: "amount",
			render: priceFormatter
		},
		{
			ellipsis: true,
			title: "Способ оплаты",
			dataIndex: "payment_type",
			key: "payment_type",
			render: (payment_type: TTransactionData["payment_type"]) => formatEmpty(payment_type?.name)
		},
		{
			ellipsis: true,
			title: "Группа",
			dataIndex: "group",
			key: "group",
			render: (group: TTransactionData["group"]) => group ? (
				<Link to={`/group/${group.id}`}>
					{group?.name}
				</Link>
			) : "-"
		}
	];

	return columns;
};
