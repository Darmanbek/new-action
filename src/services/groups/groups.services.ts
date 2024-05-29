import { api } from "src/api";
import { TResponseData, TResponseSingleData } from '../index.types';
import { TGroup, TGroupChange, TGroupItem, TGroupLessonChange, TGroupStudentChange } from './groups.types';


const axiosGetGroups = async (): Promise<TResponseData<TGroup>> => {
	const response = await api.get(`/admin/groups`);
	return response.data;
};

const axiosGetGroupsById = async (id?: string | number): Promise<TResponseSingleData<TGroupItem>> => {
	const response = await api.get(`/admin/groups/${id}`);
	return response.data;
};

const axiosCreateGroups = async (value: TGroupChange): Promise<TResponseSingleData<TGroup>> => {
	const response = await api.post(`/admin/groups`, value);
	return response.data;
};

const axiosCreateGroupsStudent = async (value: TGroupStudentChange): Promise<TResponseSingleData<TGroup>> => {
	const response = await api.post(`/admin/add-student`, value);
	return response.data;
};

const axiosCreateGroupsLesson = async (value: TGroupLessonChange): Promise<TResponseSingleData<null>> => {
	const response = await api.post(`/admin/holiday/${value.id}`, value);
	return response.data;
};

const axiosEditGroups = async (value: TGroupChange): Promise<TResponseSingleData<TGroup>> => {
	const response = await api.put(`/admin/groups/${value.id}`, value);
	return response.data;
};


const axiosDeleteGroups = async (id?: number | string): Promise<void> => {
	const response = await api.delete(`/admin/groups/${id}`);
	return response.data;
};

export {
	axiosGetGroups,
	axiosGetGroupsById,
	axiosCreateGroups,
	axiosCreateGroupsStudent,
	axiosCreateGroupsLesson,
	axiosEditGroups,
	axiosDeleteGroups
};
