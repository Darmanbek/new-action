import { TGroup } from "src/services/groups"
import { TBalanceRecharge } from "src/services/groups/balance"
import { TStudent } from "src/services/shared"

export type TFinanceDebtors = {
	first_name: string
	last_name: string
	phone: string | number

	id: string
	balance: string
	student: Pick<TStudent, "id" | "first_name" | "last_name" | "phone">
	group: Pick<TGroup, "id" | "name" | "start_date">
	balance_recharge: TBalanceRecharge
	comment_debtor: {
		comment: string
	} | null
}

export type TFinanceDebtorsChange = {
	student_id: string
	balance_id: string
	comment: string
}
