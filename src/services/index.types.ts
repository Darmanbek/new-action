export * from "./login/login.types";
// export * from "./teachers/teachers.types";
// export * from "./students/students.types";
export * from "./groups/groups.types";

export * from "./shared/shared.types";


export type TResponseSingleData<T> = {
	data: T;
};

export type TResponseData<T> = {
	data: T[];
};

export type TResponse<T> = {
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
	config: any;
	message: string;
	name: string;
	request: any;
	response: {
		data: {
			message: string;
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
