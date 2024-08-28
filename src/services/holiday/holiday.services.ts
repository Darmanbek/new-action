import { api } from "src/api";
import { TGetParams, TResponse, TResponseData, TResponseSingleData } from "src/services/index.types";
import { THoliday, THolidayChange } from "./holiday.types";

const axiosGetHoliday = async (params: TGetParams): Promise<TResponseData<THoliday>> => {
	const response = await api.get(`/admin/holidays`, { params });
	return response.data;
};

const axiosCreateHoliday = async (form: THolidayChange): Promise<TResponse<THoliday>> => {
	const response = await api.post(`/admin/holidays`, form);
	return response.data;
};

const axiosDeleteHoliday = async (id?: number | string): Promise<TResponseSingleData<void>> => {
	const response = await api.delete(`/admin/holidays/${id}`);
	return response.data;
};

export {
	axiosGetHoliday,
	axiosCreateHoliday,
	axiosDeleteHoliday,
};
