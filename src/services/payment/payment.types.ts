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
	assessment: TPaymentAssessment;
	date: string;
}

export type TPaymentAssessment = {
	id: string;
	title: string;
}
