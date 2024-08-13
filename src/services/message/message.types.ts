export type TMessage = {
	id: string;
	first_name: string;
	last_name: string;
	phone: string;
	closed_count: number;
};

export type TMessageItem = {
	message_id: string;
	message: string;
	closed: boolean;
	is_answer: boolean;
	date: string;
};

export type TMessageChange = {
	to_user: string;
	message: string;
};
