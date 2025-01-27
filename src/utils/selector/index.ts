import { CheckCircleOutlined, SyncOutlined } from "@ant-design/icons"
import { PresetColorType } from "antd/es/_util/colors"
import { createElement } from "react"
import { TResponseError, TRoleTypes } from "src/services/shared"
import { TDayTypes } from "src/services/shared/day"

export const paymentTranslation = (payment?: string) => {
	if (!payment) return ""
	switch (payment.toLowerCase()) {
		case "cash":
			return "Наличные"
		case "click":
			return "Click"
		case "payme":
			return "Payme"
		case "paynet":
			return "Paynet"
		default:
			return payment
	}
}

export const dayTranslation = (day: TDayTypes) => {
	switch (day.toLowerCase()) {
		case "odd day":
			return "Нечетные дни"
		case "even day":
			return "Четные дни"
		case "every day":
			return "Каждый день"
		default:
			return day
	}
}

export const dayColor = (day: number): PresetColorType | "default" => {
	switch (day) {
		case 1:
			return "blue"
		case 2:
			return "green"
		case 3:
			return "red"
		default:
			return "default"
	}
}

export const completeColor = (is_completed?: boolean): "success" | "processing" => {
	if (is_completed) {
		return "success"
	}
	return "processing"
}

export const completeIcon = (is_completed?: boolean) => {
	if (is_completed) {
		return createElement(CheckCircleOutlined)
	}
	return createElement(SyncOutlined, { spin: true })
}

export const completeName = (is_completed?: boolean): string => {
	if (is_completed) {
		return "Завершено"
	}
	return "В процессе"
}

export const roleColor = (role?: TRoleTypes) => {
	switch (role) {
		case "super_admin":
			return "magenta"
		case "admin":
			return "geekblue"
		case "director":
			return "cyan"
		default:
			return "green"
	}
}

export const monthGrammar = <T>(value: T) => {
	if (typeof value !== "string") return ""
	switch (value) {
		case "":
			return ""
		case "1":
			return "месяц"
		case "2":
		case "3":
		case "4":
			return "месяца"

		default:
			return "месяцев"
	}
}

export const groupGrammar = (value: number) => {
	switch (value) {
		case 1:
			return "группа"
		case 2:
		case 3:
		case 4:
			return "группы"

		default:
			return "групп"
	}
}

export const errorResponse = (error: TResponseError) => {
	if (error?.response?.data?.message) {
		return error.response.data.message
	}
	if (error?.response?.data?.error) {
		return error.response.data.error
	}

	return error.message
}
