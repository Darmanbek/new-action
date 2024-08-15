export type TPaymentType = {
	id: number;
	name: string;
}

export type TPaymentTypeChange = {
	id?: number;
	name: string;
}

export type TPaymentHistory = {
	amount: number;
	payment_type: string;
	date: string;
}
