import { api } from "src/api"
import {
	TGetParams,
	TLesson,
	TResponse,
	TResponseData,
	TResponseSingleData,
	TStudent
} from "src/services/shared"
import { TGroup, TGroupAssessment, TGroupChange, TGroupStudentChange } from "./groups.types"

const axiosGetGroups = async (params: TGetParams): Promise<TResponse<TGroup>> => {
	const response = await api.get(`/admin/groups`, { params })
	return response.data
}

const axiosGetGroupsById = async (id?: string | number): Promise<TResponseSingleData<TGroup>> => {
	const response = await api.get(`/admin/groups/${id}`)
	return response.data
}

const axiosGetGroupsByIdStudents = async (
	id?: string | number
): Promise<TResponseData<TStudent>> => {
	const response = await api.get(`/admin/groups/${id}/students`)
	return response.data
}

const axiosGetGroupsByIdAssessments = async (
	id?: string | number
): Promise<TResponseData<TGroupAssessment>> => {
	const response = await api.get(`/admin/groups/${id}/assessments`)
	return response.data
}

const axiosGetGroupsByIdCalendar = async (
	params: TGetParams,
	id?: string | number
): Promise<TResponseData<string>> => {
	const response = await api.get(`/admin/groups/${id}/calendar`, { params })
	return response.data
}

const axiosGetGroupsByIdLessons = async (id?: string | number): Promise<TResponseData<TLesson>> => {
	const response = await api.get(`/admin/groups/${id}/lessons`)
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
	axiosDeleteGroupsStudents
}
