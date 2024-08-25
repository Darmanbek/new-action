import { TLesson } from "src/services/index.types";

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
	lesson: TLesson;
	date: string;
}

export type TPaymentAssessment = {
	id: string;
	title: string;
}
