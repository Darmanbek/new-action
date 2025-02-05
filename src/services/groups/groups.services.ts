import { api } from "src/api"
import {
	TGetParams,
	TLesson,
	TParamId,
	TResponse,
	TResponseData,
	TResponseSingleData,
	TStudent
} from "src/services/shared"
import { TGroup, TGroupAssessment, TGroupChange, TGroupStudentChange } from "./groups.types"

const axiosGetGroups = async (
	params: TGetParams,
	companyId?: TParamId
): Promise<TResponse<TGroup>> => {
	const response = await api.get(
		companyId ? `/dashboard/companies/${companyId}` : `/admin/groups`,
		{ params }
	)
	if (companyId) {
		return {
			data: response.data?.data?.groups
		}
	}
	return response.data
}

const axiosGetGroupsById = async (
	id: TParamId,
	type: "admin" | "dashboard/companies"
): Promise<TResponseSingleData<TGroup>> => {
	const response = await api.get(`/${type}/groups/${id}`)
	return response.data
}

const axiosGetGroupsByIdStudents = async (
	id: TParamId,
	isDirector?: boolean
): Promise<TResponseData<TStudent>> => {
	const response = await api.get(
		isDirector ? `/dashboard/companies/groups/${id}` : `/admin/groups/${id}/students`
	)
	if (isDirector) {
		return {
			data: response.data?.data?.students
		}
	}
	return response.data
}

const axiosGetGroupsByIdAssessments = async (
	id: TParamId,
	type: "admin" | "dashboard/companies"
): Promise<TResponseData<TGroupAssessment>> => {
	const response = await api.get(`/${type}/groups/${id}/assessments`)
	return response.data
}

const axiosGetGroupsByIdCalendar = async (
	params: TGetParams,
	id: TParamId,
	type: "admin" | "dashboard/companies"
): Promise<TResponseData<string>> => {
	const response = await api.get(`/${type}/groups/${id}/calendar`, { params })
	return response.data
}

const axiosGetGroupsByIdLessons = async (
	id: TParamId,
	type: "admin" | "dashboard/companies"
): Promise<TResponseData<TLesson>> => {
	const response = await api.get(`/${type}/groups/${id}/lessons`)
	return response.data
}

const axiosCreateGroups = async (value: TGroupChange): Promise<TResponseSingleData<TGroup>> => {
	const response = await api.post(`/admin/groups`, value)
	return response.data
}

const axiosEditGroups = async (value: TGroupChange): Promise<TResponseSingleData<TGroup>> => {
	const response = await api.put(`/admin/groups/${value.id}`, value)
	return response.data
}

const axiosDeleteGroups = async (id?: number | string): Promise<void> => {
	const response = await api.delete(`/admin/groups/${id}`)
	return response.data
}

const axiosCreateGroupsStudent = async (value: TGroupStudentChange) => {
	const response = await api.post(`/admin/groups/add-student`, value)
	return response.data
}

const axiosDeleteGroupsStudents = async (
	form: TGroupStudentChange,
	id?: number | string
): Promise<void> => {
	const response = await api.delete(`/admin/groups/${id}/students`, {
		data: form
	})
	return response.data
}

export {
	axiosGetGroups,
	axiosGetGroupsById,
	axiosGetGroupsByIdStudents,
	axiosGetGroupsByIdAssessments,
	axiosGetGroupsByIdCalendar,
	axiosGetGroupsByIdLessons,
	axiosCreateGroups,
	axiosEditGroups,
	axiosDeleteGroups,
	axiosCreateGroupsStudent,
	axiosDeleteGroupsStudents
}
