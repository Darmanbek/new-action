import { api } from "src/api";
import { TResponseData, TResponseSingleData, TUser } from '../index.types';


const axiosGetTeachers = async (): Promise<TResponseData<TUser>> => {
	const response = await api.get(`/admin/teachers`);
	return response.data;
};

const axiosCreateTeachers = async (value: TUser): Promise<TResponseSingleData<TUser>> => {
	const response = await api.post(`/admin/user`, value);
	return response.data;
};

const axiosEditTeachers = async (value: any): Promise<TResponseSingleData<TUser>> => {
	const response = await api.put(`/admin/teachers/${value.id}`, value);
	return response.data;
};

const axiosDeleteTeachers = async (id?: number | string): Promise<void> => {
	const response = await api.delete(`/admin/teachers/${id}`);
	return response.data;
};

export {
	axiosGetTeachers,
	axiosCreateTeachers,
	axiosEditTeachers,
	axiosDeleteTeachers
};
