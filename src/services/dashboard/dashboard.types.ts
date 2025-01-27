import type { TAdmin } from "src/services/admins"
import type { TGroup } from "src/services/groups"
import type { TStudent } from "src/services/shared"
import type { TPaymentType } from "src/services/shared/payment-types"

export type TDashboardCompany = {
	id: string
	name: string
	admin: TAdmin
}

export type TDashboardCompanyItem = {
	id: string
	name: string
	first_name: string
	last_name: string
	groups: TGroup[]
}

export type TDashboardStudentsRating = {
	rating: string
	id: string
	student: TStudent
	group: TGroup
}

export type TDashboardTeachersRating = {
	id: string
	first_name: string
	last_name: string
	phone: string
	rating: string
}

export type TDashboardFinance = {
	profit: string
	data: {
		total: number
		data: TDashboardFinanceTransaction[]
	}
}

export type TDashboardFinanceTransaction = {
	id: string
	amount: number
	date: string
	student: TStudent
	payment_type: TPaymentType
	group: TGroup
}
