import { api } from "src/api";
import { TGetParams, TResponse, TResponseData, TResponseSingleData } from "src/services/index.types";
import {
	TDashboardAdmin,
	TDashboardCompany,
	TDashboardCompanyItem,
	TDashboardStudentsRating,
	TDashboardTeachersRating
} from "./dashboard.types";


const axiosGetDashboardCompanies = async (): Promise<TResponse<TDashboardCompany>> => {
	const response = await api.get(`/dashboard/companies`);
	return response.data;
};

const axiosGetDashboardCompaniesById = async (params: TGetParams, id?: number | string): Promise<TResponseSingleData<TDashboardCompanyItem>> => {
	const response = await api.get(`/dashboard/companies/${id}`, { params });
	return response.data;
};

const axiosGetDashboardAdmins = async (): Promise<TResponseData<TDashboardAdmin>> => {
	const response = await api.get(`/dashboard/admins`);
	return response.data;
};

const axiosGetDashboardStudentsRating = async (): Promise<TResponse<TDashboardStudentsRating>> => {
	const response = await api.get(`/dashboard/students/rating`);
	return response.data;
};

const axiosGetDashboardTeachersRating = async (): Promise<TResponse<TDashboardTeachersRating>> => {
	const response = await api.get(`/dashboard/teachers/rating`);
	return response.data;
};

export {
	axiosGetDashboardCompanies,
	axiosGetDashboardCompaniesById,
	axiosGetDashboardAdmins,
	axiosGetDashboardStudentsRating,
	axiosGetDashboardTeachersRating
};
