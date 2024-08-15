import { TCompany, TPaymentHistory } from "src/services/index.types";

export type TRoleTypes = "super_admin" | "admin" | "director";

export type TGetParams = {
	limit?: number;
	page?: number;
	search?: string;
};

export type TLangType = {
	ltn: string;
	cyr: string;
};

export type TStudent = {
	id: string;
	first_name: string;
	last_name: string;
	role: TRoleTypes;
	phone: string;
	payment_history: TPaymentHistory[];
	company: null | TCompany;
}

export type TLesson = {
	id: string | number;
	title: string;
	price: number;
	date: string;
	is_free: boolean;
}
