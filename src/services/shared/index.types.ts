export type TRoleTypes = "super_admin" | "admin" | "director";

export type TGetParamItem = {
	id: number;
	name: string;
};

export type TGetParams = {
	limit?: number;
	page?: number;
	search?: string;
};

export type TLangType = {
	ltn: string;
	cyr: string;
};
