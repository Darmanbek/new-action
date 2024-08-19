import { TBalance, TPaymentHistory } from "src/services/index.types";

export type TRoleTypes = "super_admin" | "admin" | "director";

export type TGetParams = {
	limit?: number;
	page?: number;
	search?: string;
	date?: {
		start?: string | null
		end?: string | null;
	} | string[];
	is_completed?: number;
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
	balance: TBalance | null;
	payment_history: TPaymentHistory[];
	transactions: TTransaction[];
	assessments: TAssessment[];
}

export type TAssessment = {
	id: string;
	is_free: boolean;
	holiday: boolean;
	is_exam: boolean;
	value: number;
	is_available: boolean;
	consented: boolean | null;
	date: string;
}

export type TTransaction = {
	amount: number;
	date: string;
	payment_type: string;
}

export type TLesson = {
	id: string | number;
	title: string;
	price: number;
	date: string;
	is_free: boolean;
}
