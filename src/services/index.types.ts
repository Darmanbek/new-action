import { AxiosError } from "axios";

export * from "./login/login.types";

export * from "./dashboard/dashboard.types";
export * from "./admins/admins.types";
export * from "./teachers/teachers.types";
export * from "./groups/groups.types";
export * from "./groups/balance/balance.types";
export * from "./groups/frozen-status/frozen-status.types";
export * from "./companies/companies.types";
export * from "./acceptances/acceptances.types";
export * from "./holiday/holiday.types";
export * from "./stories/stories.types";
export * from "./finances/finances.types";
export * from "./finances/debtors/debtors.types";
export * from "./shared/payment/payment.types";
export * from "./shared/day/day.types";

export * from "./chat/chat.types";

export * from "./shared/shared.types";


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

export type TResponseError = AxiosError<{
	message?: string;
	error?: string;
}>;

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
