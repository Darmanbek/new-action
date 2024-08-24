import { api } from "src/api";
import { TTeacher, TTeacherChange, TTeacherFormDataChange } from "./teachers.types";
import {
	TResponse,
	TResponseSingleData,
	TGetParams,
} from "src/services/index.types";

const axiosGetTeachers = async (
	params: TGetParams
): Promise<TResponse<TTeacher>> => {
	const response = await api.get(`/admin/teachers`, { params });
	return response.data;
};

const axiosGetTeachersById = async (
	id?: string | number
): Promise<TResponseSingleData<TTeacher>> => {
	const response = await api.get(`/admin/teachers/${id}`);
	return response.data;
};

const axiosCreateTeachers = async (
	value: TTeacherChange | FormData
): Promise<TResponseSingleData<TTeacher>> => {
	const response = await api.post(`/admin/teachers`, value);
	return response.data;
};

const axiosEditTeachers = async (
	value: TTeacherFormDataChange
): Promise<TResponseSingleData<TTeacher>> => {
	const response = await api.post(`/admin/teachers/${value.id}`, value.formData);
	return response.data;
};

const axiosDeleteTeachers = async (
	id?: number | string
): Promise<TResponseSingleData<void>> => {
	const response = await api.delete(`/admin/teachers/${id}`);
	return response.data;
};

export {
	axiosGetTeachers,
	axiosGetTeachersById,
	axiosCreateTeachers,
	axiosEditTeachers,
	axiosDeleteTeachers,
};
