import { api } from "src/api";
import {
	TResponseSingleData,
	TGetParams,
	TResponse
} from "src/services/index.types";
import { TAcceptance, TAcceptanceChange } from "./acceptances.types";

const axiosGetAcceptance = async (
	params: TGetParams
): Promise<TResponse<TAcceptance>> => {
	const response = await api.get(`/admin/acceptances`, { params });
	return response.data;
};

const axiosCreateAcceptance = async (
	value: TAcceptanceChange
): Promise<TResponseSingleData<TAcceptance>> => {
	const response = await api.post(`/admin/acceptances`, value);
	return response.data;
};

const axiosEditAcceptance = async (
	value: TAcceptanceChange
): Promise<TResponseSingleData<TAcceptance>> => {
	const response = await api.put(`/admin/acceptances/${value.id}`, value);
	return response.data;
};

const axiosDeleteAcceptance = async (
	id?: number | string
): Promise<TResponseSingleData<void>> => {
	const response = await api.delete(`/admin/acceptances/${id}`);
	return response.data;
};

export {
	axiosGetAcceptance,
	axiosCreateAcceptance,
	axiosEditAcceptance,
	axiosDeleteAcceptance,
};
