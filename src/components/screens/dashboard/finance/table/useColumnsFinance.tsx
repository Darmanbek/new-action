import capitalize from "antd/es/_util/capitalize"
import type { ColumnsType } from "antd/es/table"
import { Link } from "react-router-dom"
import { UiFilterIcon, UiTag } from "src/components/ui"
import type { TDashboardFinanceTransaction } from "src/services/dashboard"
import { useGetPaymentTypesQuery } from "src/services/shared/payment-types"
import { formatEmpty, paymentFormatToTag, paymentTranslation, priceFormatter } from "src/utils"

export const useColumnsFinance = () => {
	const { data: paymentTypes } = useGetPaymentTypesQuery()

	const columns: ColumnsType<TDashboardFinanceTransaction> = [
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
			render: (student: TDashboardFinanceTransaction["student"]) =>
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
			render: (payment_type: TDashboardFinanceTransaction["payment_type"]) =>
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
			render: (group: TDashboardFinanceTransaction["group"]) =>
				group ? <Link to={`/groups/${group?.id}`}>{group?.name}</Link> : "-"
		}
	]

	return columns
}
