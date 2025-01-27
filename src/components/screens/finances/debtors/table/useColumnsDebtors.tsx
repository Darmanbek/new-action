import { MessageOutlined } from "@ant-design/icons"
import type { ColumnsType } from "antd/es/table"
import { Link } from "react-router-dom"
import { UiTag, UiTooltipButton } from "src/components/ui"
import type { TFinanceDebtors } from "src/services/finances/debtors"
import { useFormStorageStore } from "src/store"
import { formatEmpty, phoneFormatter, priceFormatter } from "src/utils"

export const useColumnsDebtors = () => {
	const addComment = useFormStorageStore((state) => state.setParamsForm)

	const columns: ColumnsType<TFinanceDebtors> = [
		{
			width: 50,
			ellipsis: true,
			title: "№",
			dataIndex: "index",
			key: "index",
			render: (_v, _r, index) => index + 1
		},
		{
			ellipsis: true,
			title: "Студент",
			dataIndex: "student",
			key: "student",
			render: (student: TFinanceDebtors["student"], debtor) =>
				student ? (
					<Link
						to={`/groups/${debtor?.group?.id}/students/${student?.id}`}
					>{`${student?.first_name} ${student?.last_name}`}</Link>
				) : (
					"-"
				)
		},
		{
			ellipsis: true,
			title: "Комментарий",
			dataIndex: "comment_debtor",
			key: "comment_debtor",
			render: (comment_debtor: TFinanceDebtors["comment_debtor"]) => comment_debtor?.comment
		},
		{
			ellipsis: true,
			title: "Телефон",
			dataIndex: "student",
			key: "phone",
			render: (student: TFinanceDebtors["student"]) => phoneFormatter(student?.phone)
		},
		{
			ellipsis: true,
			title: "Баланс",
			dataIndex: "balance",
			key: "balance",
			render: (balance) => (
				<UiTag color={"red"} bordered={false}>
					{priceFormatter(balance)}
				</UiTag>
			)
		},
		{
			ellipsis: true,
			title: "Группа",
			dataIndex: "group",
			key: "group",
			render: (group: TFinanceDebtors["group"]) =>
				group ? <Link to={`/groups/${group?.id}`}>{group?.name}</Link> : "-"
		},
		{
			ellipsis: true,
			title: "Дата оплаты",
			dataIndex: "balance_recharge",
			key: "balance_recharge",
			render: (balance_recharge: TFinanceDebtors["balance_recharge"]) =>
				formatEmpty(balance_recharge?.deadline)
		},
		{
			align: "center",
			width: 100,
			ellipsis: false,
			title: "Действия",
			key: "actions",
			render: (_v, record) => (
				<UiTooltipButton
					title={"Добавить комментарий"}
					showTitle={true}
					color={"orange"}
					type={"primary"}
					shape={"circle"}
					icon={<MessageOutlined />}
					onClick={() => addComment(record)}
				/>
			)
		}
	]

	return columns
}
