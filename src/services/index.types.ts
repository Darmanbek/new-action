export type * from "./acceptance/acceptance.types";
export type * from "./admin/admin.types";
export type * from "./auth/auth.types";
export type * from "./companies/companies.types";
export type * from "./groups/groups.types";
export type * from "./teachers/teachers.types";
export type * from "./debtors/debtors.types";
export type * from "./payment/payment.types";
export type * from "./balance/balance.types";
export type * from "./finance/finance.types";
export type * from "./dashboard/dashboard.types";
export type * from "./day/day.types";
export type * from "./holiday/holiday.types";

export type * from "./message/message.types";

export type * from "./shared/shared.types";

export type TResponseSingleData<T> = {
	success?: boolean;
	message?: string;
	data: T;
};

export type TResponseData<T> = {
	success?: boolean;
	message?: string;
	data: T[];
};

export type TResponse<T> = {
	success?: boolean;
	message?: string;
	data: T[];
	links?: TLinks;
	meta: TMeta;
};

export type TLinks = {
	first: string;
	last: string;
	prev: null;
	next: null;
};

export type TResponseError = {
	code: string;
	config: unknown;
	message: string;
	name: string;
	request: unknown;
	response?: {
		data?: {
			message?: string;
			error?: string;
		};
		status: number;
		statusText: string;
	};
	stack: string;
};

export type TMeta = {
	current_page: number;
	from: number;
	last_page: number;
	links: TInnerLinks[];
	path: string;
	per_page: number;
	to: number;
	total: number;
};

export type TInnerLinks = {
	url: null;
	label: string;
	active: boolean;
};
