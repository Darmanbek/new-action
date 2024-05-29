export const getYear = (date: string) => {
	if (!date) return date;
	const [year, ,] = date.split("-");

	return year;
};

export const getDay = (date: string) => {
	if (!date) return date;
	const [, , day] = date.split("-");

	return Number(day);
};

export const getRowSpanUp = (length: number) => {
	switch (length) {
		case 1:
			return 1;
		case 2:
			return 1;
		case 3:
			return 2;
		case 4:
			return 2;
		case 5:
			return 3;
		case 6:
			return 3;
	}
};

export const getRowSpanDown = (length: number) => {
	switch (length) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 3:
			return 2;
		case 4:
			return 3;
		case 5:
			return 3;
		case 6:
			return 4;
	}
};

export const isMiddleRow = (length: number, index: number) => {
	if (length % 2 === 0) {
		return length / 2 === index + 1;
	}
	return (length + 1) / 2 === index + 1;
};

export const roleColor = (role?: number) => {
	switch (role) {
		case 1:
			return "magenta";
		case 2:
			return "geekblue";
		case 3:
			return "cyan";
		default:
			return "green";
	}
};

export const paidColor = (is_paid: boolean) => {
	if (is_paid) return "green";
	return "red";
};

export const paidText = (is_paid: boolean) => {
	if (is_paid) return "ОПЛАЧЕН";
	return "НЕОПЛАЧЕН";
};