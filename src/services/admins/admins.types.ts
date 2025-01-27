import type { TCompany } from "src/services/companies"

export type TAdmin = {
	id: string
	first_name: string
	last_name: string
	phone: string
	company: TCompany | string | null
}

export type TAdminChange = {
	id?: string
	first_name: string
	last_name: string
	phone: string
	password: string | number
}
