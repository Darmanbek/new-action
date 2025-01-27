import type { TGroup } from "src/services/groups"
import type { TStudent } from "src/services/shared"

export type TAcceptance = {
	id: string | number
	is_acceptance: boolean
	group: TGroup
	student: TStudent
}

export type TAcceptanceChange = {
	id?: string | number
	is_acceptance: boolean
}
