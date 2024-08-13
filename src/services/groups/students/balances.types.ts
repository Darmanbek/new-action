export type TGroupStudent = {
	id: string;
	first_name: string;
	last_name: string;
	phone: number;
	payment_history: TGroupStudentPaymentHistory[];
};

export type TGroupStudentPaymentHistory = {
	amount: number;
	payment_type: string;
	date: string;
};

export type TGroupStudentChange = {
	id?: number | string;
	student_id: number | string;
	group_id: number | string;
};

//Payments

export type TGroupStudentCreateBalance = {
	student_id: string | number;
	payment_type_id: string | number;
	amount: number;
};
