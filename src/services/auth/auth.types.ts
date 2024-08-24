import { TRoleTypes, TCompany } from "src/services/index.types";

export type TAuthLogin = {
	phone: string;
	password: string;
};

export type TTokenAuth = {
	role: TRoleTypes;
	role_id: number;
	token: string;
	company: TCompany;
};

export type TProfileAuth = {
	id: string;
	role: TRoleTypes;
	first_name: string;
	last_name: string;
	phone: string;
	company: TCompany;
};
