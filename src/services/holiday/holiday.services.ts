import { api } from "src/api";
import { TGetParams, TResponse, TResponseData } from "src/services/index.types";
import { THoliday, THolidayChange } from "./holiday.types";

const axiosGetHoliday = async (params: TGetParams): Promise<TResponseData<THoliday>> => {
	const response = await api.get(`/admin/holidays`, { params });
	return response.data;
};

const axiosCreateHoliday = async (form: THolidayChange): Promise<TResponse<THoliday>> => {
	const response = await api.post(`/admin/holidays`, form);
	return response.data;
};

export {
	axiosGetHoliday,
	axiosCreateHoliday
}
