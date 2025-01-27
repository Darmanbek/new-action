import type { TAdmin } from "src/services/admins"

export type TCompany = {
	id: string
	name: string
	admin: TAdmin
}

export type TCompanyChange = {
	id?: string
	name: string
	admin_id: string
}
