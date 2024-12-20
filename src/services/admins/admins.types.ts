import { TCompany } from "src/services/index.types";

export type TAdmin = {
	id: string;
	first_name: string;
	last_name: string;
	phone: string;
	company: TCompany | string | null;
};

export type TAdminChange = {
	id?: string;
	first_name: string;
	last_name: string;
	phone: string;
	password: string | number;
};
