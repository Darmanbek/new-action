import { TAdmin } from "src/services/index.types";

export type TCompany = {
	id: string;
	name: string;
	admin: TAdmin;
};

export type TCompanyChange = {
	id?: string;
	name: string;
	admin_id: string;
};
