import { api } from "src/api";
import { TDay } from "src/services/day/day.types";
import { TResponseData } from "src/services/index.types";

const axiosGetDay = async (): Promise<TResponseData<TDay>> => {
	const response = await api.get(`/admin/day`);
	return response.data;
};

export {
	axiosGetDay
};
