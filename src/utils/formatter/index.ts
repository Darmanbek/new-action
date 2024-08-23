import dayjs from "dayjs";
import { monthGrammar } from "src/utils/selector";

export const phoneFormatter = (phone?: string | null) => {
	return phone
		? phone.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, "+$1 $2 $3 $4 $5")
		: "-";
};

export const phoneReverseFormatter = (phone?: string | null) => {
	return phone ? phone.replace(/ /g, "").substring(1) : "-";
};

export const priceFormatter = (price?: number | string | null) => {
	if (price === undefined) return "-";
	if (price === null) return "-";
	return Intl.NumberFormat("en-EN", {}).format(Number(price)) + " UZS";
};

export const formatEmpty = <T>(value?: T) => value ?? "-";

export const formatNum = <T>(value: T) =>
	`${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const formatPercent = <T>(value: T) => `${value}%`;
export const formatMonth = <T>(value: T) => value ? `${value} ${monthGrammar(value)}` : "";

export const dateFormatter = (date: string, format?: string) =>
	dayjs(date).format(format || "YYYY-MM-DD");

export const lowerCase = (text: string) => text.toLowerCase();
export const formMessage = (text: string) => `Пожалуйста, заполните поле ${lowerCase(text)}!`;
