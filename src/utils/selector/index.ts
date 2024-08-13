import { TResponseError } from "src/services/index.types";

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

export const monthGrammar = <T>(value: T) => {
	if (typeof value !== "string") return "";
	switch (value) {
		case "":
			return "";
		case "1":
			return "месяц";
		case "2":
		case "3":
		case "4":
			return "месяца";

		default:
			return "месяцев";
	}
};


export const errorResponse = (error: TResponseError) => {
	if (error?.response?.data?.message) {
		return error.response.data.message;
	}
	if (error?.response?.data?.error) {
		return error.response.data.error;
	}

	return error.message;
};
