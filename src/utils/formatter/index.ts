import Icon from "@ant-design/icons";
import dayjs from "dayjs";
import { createElement } from "react";
import { IoCardOutline } from "react-icons/io5";
import { PiContactlessPayment } from "react-icons/pi";
import { TbCashBanknote, TbSquareRoundedPercentage } from "react-icons/tb";
import { UiTag } from "src/components/ui";
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

export const dateFormatter = (date?: string, format?: string) =>
	dayjs(date).format(format || "YYYY-MM-DD");

export const formatDate = (date?: string) => dateFormatter(date, "D MMMM YYYY");
export const formatShortDate = (date?: string) => dateFormatter(date, "D MMM YYYY");

export const lowerCase = (text: string) => text.toLowerCase();
export const formMessage = (text: string) => `Пожалуйста, заполните поле ${lowerCase(text)}!`;

export const paymentFormatToTag = (payment?: string) => {
	if (!payment) return "";
	switch (payment.toLowerCase()) {
		case "cash":
			return createElement(UiTag, {
				children: "Наличные",
				color: "green",
				icon: createElement(Icon, { children: createElement(TbCashBanknote) }),
			});
		case "click":
			return createElement(UiTag, {
				children: "Click",
				color: "geekblue",
				icon: createElement(Icon, { children: createElement(TbSquareRoundedPercentage) }),
			});
		case "payme":
			return createElement(UiTag, {
				children: "Payme",
				color: "cyan",
				icon: createElement(Icon, { children: createElement(PiContactlessPayment) }),
			});
		case "paynet":
			return createElement(UiTag, {
				children: "Paynet",
				color: "cyan",
				icon: createElement(Icon, { children: createElement(IoCardOutline) }),
			});
		default:
			return createElement(UiTag, {
				children: payment,
			});
	}
};
