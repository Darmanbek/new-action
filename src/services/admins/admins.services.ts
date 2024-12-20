import { api } from "src/api";
import { TResponseData, TResponseSingleData } from "src/services/index.types";
import { TAdmin, TAdminChange } from "./admins.types";

const axiosGetAdmins = async (): Promise<TResponseData<TAdmin>> => {
	const response = await api.get(`/admin/admins`);
	return response.data;
};

const axiosCreateAdmins = async (
	value: TAdminChange
): Promise<TResponseSingleData<TAdmin>> => {
	const response = await api.post(`/admin/admins`, value);
	return response.data;
};

const axiosEditAdmins = async (
	value: TAdminChange
): Promise<TResponseSingleData<TAdmin>> => {
	const response = await api.put(`/admin/admins/${value.id}`, value);
	return response.data;
};

const axiosDeleteAdmins = async (
	id?: number | string
): Promise<TResponseSingleData<void>> => {
	const response = await api.delete(`/admin/admins/${id}`);
	return response.data;
};

export {
	axiosGetAdmins,
	axiosCreateAdmins,
	axiosEditAdmins,
	axiosDeleteAdmins,
};
