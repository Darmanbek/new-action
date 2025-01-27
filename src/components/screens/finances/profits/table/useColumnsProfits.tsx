import capitalize from "antd/es/_util/capitalize"
import { ColumnsType } from "antd/es/table"
import { Link } from "react-router-dom"
import { UiFilterIcon, UiTag } from "src/components/ui"
// import { useGetGroupsQuery } from "src/services/groups/groups.api";
import type { TFinanceTransactionData } from "src/services/finances"
import { useGetPaymentTypesQuery } from "src/services/shared/payment-types"
import { formatEmpty, paymentFormatToTag, paymentTranslation, priceFormatter } from "src/utils"

export const useColumnsProfits = () => {
	const { data: paymentTypes } = useGetPaymentTypesQuery()

	// const { data: groups } = useGetGroupsQuery({});

	const columns: ColumnsType<TFinanceTransactionData> = [
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
			render: (student: TFinanceTransactionData["student"]) =>
				`${student?.first_name} ${student?.last_name}`
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
			)
		},
		{
			ellipsis: true,
			title: "Способ оплаты",
			dataIndex: "payment_type",
			key: "payment_type",
			render: (payment_type: TFinanceTransactionData["payment_type"]) =>
				paymentFormatToTag(payment_type?.name),
			filters: paymentTypes?.data.map((el) => ({
				value: el.id,
				text: capitalize(paymentTranslation(el.name))
			})),
			filterIcon: <UiFilterIcon />,
			filterMultiple: false
		},
		{
			ellipsis: true,
			title: "Группа",
			dataIndex: "group",
			key: "group",
			render: (group: TFinanceTransactionData["group"]) =>
				group ? <Link to={`/groups/${group.id}`}>{group?.name}</Link> : "-"
			// filters: groups?.data.map(el => ({
			// 	value: el.id,
			// 	text: el.name,
			// })),
			// filterSearch: true,
			// filterIcon: <UiFilterIcon />,
			// filterMultiple: false
		}
	]

	return columns
}
