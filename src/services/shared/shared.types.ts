import type { Key } from "react"
import type { TBalance } from "src/services/groups/balance"
import type { TFrozenStatus } from "src/services/groups/frozen-status"
import type { TPaymentHistory, TPaymentType } from "src/services/shared/payment-types"

export type TRoleTypes = "super_admin" | "admin" | "director"

export type TLangType = {
	ltn: string
	cyr: string
}

export type TStudent = {
	key: Key
	id: string
	first_name: string
	last_name: string
	role: TRoleTypes
	phone: string
	rating: string
	frozen_status: TFrozenStatus
	balance: TBalance | null
	payment_history: TPaymentHistory[]
	transactions: TTransaction[]
	assessments: TAssessment[]
}

export type TAssessment = {
	id: string
	value: number | null
	// is_available: boolean;
	// consented: boolean | null;
	date: string
}

export type TTransaction = {
	amount: number
	date: string
	comment: string | null
	payment_type: TPaymentType
}

export type TLesson = {
	id: string | number
	title: string
	// is_holiday: false;
	is_exam: false
	price?: number
	date: string
	is_free: boolean
}
