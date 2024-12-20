

export type TGetParams = {
	limit?: number | string | null;
	page?: number | string | null;
	search?: string;
	date?: {
		start?: string | null
		end?: string | null;
	} | string[];
	is_completed?: number | string;
	payment_type?: number | string;
	price?: string | null;
	day?: number | string;
	group_id?: string;
	per_page?: number | string;
};
