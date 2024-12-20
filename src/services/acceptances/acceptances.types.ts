import type { TGroup, TStudent } from "src/services/index.types";

export type TAcceptance = {
	id: string | number;
	is_acceptance: boolean;
	group: TGroup;
	student: TStudent;
};

export type TAcceptanceChange = {
	id?: string | number;
	is_acceptance: boolean
}
