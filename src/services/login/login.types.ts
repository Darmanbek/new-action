export type TLogin = {
	phone: string;
	password: string;
};

export type TStatus = {
	success: boolean; 
};

export interface TLoginType<T> extends TStatus {
	data: T;
}
