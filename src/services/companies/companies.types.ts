import { TAdmin, TGroup } from "src/services/index.types";

export type TCompany = {
	id: string;
	name: string;
	admin: TAdmin;
	groups: TGroup[];
};

export type TCompanyChange = {
	id?: string;
	name: string;
	admin_id: string;
};
