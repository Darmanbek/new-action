export type TBalance = {
	id: string;
	total_amount: string;
}

export type TBalanceChange = {
	student_id: string | number;
	payment_type_id: string | number;
	amount: number;
	group_id: number | string;
};
