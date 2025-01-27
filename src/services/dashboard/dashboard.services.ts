import { api } from "src/api"
import type { TAdmin } from "src/services/admins"
import type { TGroup, TGroupAssessment } from "src/services/groups"
import type { THoliday } from "src/services/holiday"
import type {
	TGetParams,
	TLesson,
	TResponse,
	TResponseData,
	TResponseSingleData
} from "src/services/shared"
import type { TStory } from "src/services/stories"
import type {
	TDashboardCompany,
	TDashboardCompanyItem,
	TDashboardFinance,
	TDashboardStudentsRating,
	TDashboardTeachersRating
} from "./dashboard.types"

const axiosGetDashboardCompanies = async (): Promise<TResponse<TDashboardCompany>> => {
	const response = await api.get(`/dashboard/companies`)
	return response.data
}

const axiosGetDashboardCompaniesById = async (
	params: TGetParams,
	id?: number | string
): Promise<TResponseSingleData<TDashboardCompanyItem>> => {
	const response = await api.get(`/dashboard/companies/${id}`, { params })
	return response.data
}

const axiosGetDashboardCompaniesGroupsById = async (
	id?: number | string
): Promise<TResponseSingleData<TGroup>> => {
	const response = await api.get(`/dashboard/companies/groups/${id}`)
	return response.data
}

const axiosGetDashboardCompaniesGroupsByIdCalendar = async (
	params: TGetParams,
	id?: number | string
): Promise<TResponseData<string>> => {
	const response = await api.get(`/dashboard/companies/groups/${id}/calendar`, { params })
	return response.data
}

const axiosGetDashboardCompaniesGroupsByIdLessons = async (
	id?: number | string
): Promise<TResponseData<TLesson>> => {
	const response = await api.get(`/dashboard/companies/groups/${id}/lessons`)
	return response.data
}

const axiosGetDashboardCompaniesGroupsByIdAssessments = async (
	id?: number | string
): Promise<TResponseData<TGroupAssessment>> => {
	const response = await api.get(`/dashboard/companies/groups/${id}/assessments`)
	return response.data
}

const axiosGetDashboardAdmins = async (): Promise<TResponseData<TAdmin>> => {
	const response = await api.get(`/dashboard/admins`)
	return response.data
}

const axiosGetDashboardStudentsRating = async (
	id?: number | string
): Promise<TResponse<TDashboardStudentsRating>> => {
	const response = await api.get(`/dashboard/students/rating/${id}`)
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

const axiosGetDashboardHolidays = async (
	params: TGetParams,
	id?: number | string
): Promise<TResponseData<THoliday>> => {
	const response = await api.get(`dashboard/holidays/${id}`, { params })
	return response.data
}

const axiosGetDashboardStory = async (
	params: TGetParams,
	id?: number | string
): Promise<TResponseData<TStory>> => {
	const response = await api.get(`dashboard/stories/${id}`, { params })
	return response.data
}

export {
	axiosGetDashboardCompanies,
	axiosGetDashboardCompaniesById,
	axiosGetDashboardCompaniesGroupsById,
	axiosGetDashboardCompaniesGroupsByIdCalendar,
	axiosGetDashboardCompaniesGroupsByIdLessons,
	axiosGetDashboardCompaniesGroupsByIdAssessments,
	axiosGetDashboardAdmins,
	axiosGetDashboardStudentsRating,
	axiosGetDashboardTeachersRating,
	axiosGetDashboardFinances,
	axiosGetDashboardHolidays,
	axiosGetDashboardStory
}
