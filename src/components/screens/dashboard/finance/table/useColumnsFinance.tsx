import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { UiTag } from "src/components/ui";
import { TDashboardFinance } from "src/services/index.types";
import { useGetPaymentTypesQuery } from "src/services/payment/payment.api";
import { formatEmpty, priceFormatter } from "src/utils";


export const useColumnsFinance = () => {

	const {
		data: paymentTypes
	} = useGetPaymentTypesQuery();

	const columns: ColumnsType<TDashboardFinance> = [
		{
			ellipsis: true,
			title: "Дата",
			dataIndex: "date",
			key: "date",
			render: formatEmpty,
		},
		{
			ellipsis: true,
			title: "Студент",
			dataIndex: "student",
			key: "student",
			render: (student: TDashboardFinance["student"]) => `${student?.first_name} ${student?.last_name}`,
		},
		{
			ellipsis: true,
			title: "Сумма",
			dataIndex: "amount",
			key: "amount",
			render: (amount) => (
				<UiTag color={"green"} bordered={false}>
					{priceFormatter(amount)}
				</UiTag>
			),
		},
		{
			ellipsis: true,
			title: "Способ оплаты",
			dataIndex: "payment_type",
			key: "payment_type",
			render: (payment_type: TDashboardFinance["payment_type"]) => formatEmpty(payment_type?.name),
			filters: paymentTypes?.data.map(el => ({
				value: el.id,
				text: el.name
			}))
		},
		{
			ellipsis: true,
			title: "Группа",
			dataIndex: "group",
			key: "group",
			render: (group: TDashboardFinance["group"]) => group ? (
				<Link to={`/groups/${group.id}`}>
					{group?.name}
				</Link>
			) : "-",
		},
	];

	return columns;
};
