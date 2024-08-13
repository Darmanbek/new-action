import { api } from "src/api";
import {
	TResponse,
	TResponseSingleData,
	TGetParams,
} from "src/services/index.types";
import { TGroup, TGroupChange } from "./groups.types";

const axiosGetGroups = async (
	params: TGetParams
): Promise<TResponse<TGroup>> => {
	const response = await api.get(`/admin/groups`, { params });
	return response.data;
};

const axiosGetGroupsById = async (
	id?: string | number
): Promise<TResponseSingleData<TGroup>> => {
	const response = await api.get(`/admin/groups/${id}`);
	return response.data;
};

const axiosCreateGroups = async (
	value: TGroupChange
): Promise<TResponseSingleData<TGroup>> => {
	const response = await api.post(`/admin/groups`, value);
	return response.data;
};

const axiosEditGroups = async (
	value: TGroupChange
): Promise<TResponseSingleData<TGroup>> => {
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
	axiosEditGroups,
	axiosDeleteGroups,
};
