import { api } from "src/api"
import type { TGetParams, TParamId, TResponse } from "src/services/shared"
import type {
	TDashboardCompany,
	TDashboardFinance,
	TDashboardStudentsRating,
	TDashboardTeachersRating
} from "./dashboard.types"

const axiosGetDashboardCompanies = async (): Promise<TResponse<TDashboardCompany>> => {
	const response = await api.get(`/dashboard/companies`)
	return response.data
}

const axiosGetDashboardStudentsRating = async (
	params: TGetParams,
	id?: TParamId
): Promise<TResponse<TDashboardStudentsRating>> => {
	const response = await api.get(`/dashboard/students/rating/${id}`, { params })
	return response.data
}

const axiosGetDashboardTeachersRating = async (
	id?: number | string
): Promise<TResponse<TDashboardTeachersRating>> => {
	const response = await api.get(`/dashboard/teachers/rating/${id}`)
	return response.data
}

const axiosGetDashboardFinances = async (
	params: TGetParams,
	id?: number | string
): Promise<TDashboardFinance> => {
	const response = await api.get(`dashboard/finance/${id}`, { params })
	return response.data
}

export {
	axiosGetDashboardCompanies,
	axiosGetDashboardStudentsRating,
	axiosGetDashboardTeachersRating,
	axiosGetDashboardFinances
}
