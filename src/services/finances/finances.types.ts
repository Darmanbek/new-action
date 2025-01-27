import type { TCompany } from "src/services/companies"
import type { TGroup } from "src/services/groups"
import type { TStudent } from "src/services/shared"
import type { TPaymentType } from "src/services/shared/payment-types"

export type TFinance = {
	profit: string | number
	transactions: TFinanceTransaction
}

export type TFinanceCompanies = {
	gross_profit: number
	companies: (Omit<TCompany, "admin"> & {
		total_amount: number
	})[]
}

export type TFinanceTransaction = {
	data: TFinanceTransactionData[]
	total: number
}

export type TFinanceTransactionData = {
	id: string
	company_id: string
	group_id: string
	student_id: string
	payment_type_id: number
	amount: number
	date: string
	created_at: string
	updated_at: string
	student: TStudent
	group: TGroup
	payment_type: TPaymentType
}
