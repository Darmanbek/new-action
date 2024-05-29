import { api } from "src/api";
import { TResponseData, TResponseSingleData, TUser } from '../index.types';


const axiosGetStudents = async (): Promise<TResponseData<TUser>> => {
	const response = await api.get(`/admin/students`);
	return response.data;
};

const axiosCreateStudents = async (value: TUser): Promise<TResponseSingleData<TUser>> => {
	const response = await api.post(`/admin/user`, value);
	return response.data;
};

const axiosEditStudents = async (value: any): Promise<TResponseSingleData<TUser>> => {
	const response = await api.put(`/admin/students/${value.id}`, value);
	return response.data;
};

const axiosDeleteStudents = async (id?: number | string): Promise<void> => {
	const response = await api.delete(`/admin/students/${id}`);
	return response.data;
};

export {
	axiosGetStudents,
	axiosCreateStudents,
	axiosEditStudents,
	axiosDeleteStudents
};
