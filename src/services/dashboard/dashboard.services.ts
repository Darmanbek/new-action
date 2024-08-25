import { api } from "src/api";
import { TGetParams, TGroup, TResponse, TResponseData, TResponseSingleData } from "src/services/index.types";
import {
	TDashboardAdmin,
	TDashboardCompany,
	TDashboardCompanyItem,
	TDashboardStudentsRating,
	TDashboardTeachersRating,
	TDashboardFinance,
} from "./dashboard.types";


const axiosGetDashboardCompanies = async (): Promise<TResponse<TDashboardCompany>> => {
	const response = await api.get(`/dashboard/companies`);
	return response.data;
};

const axiosGetDashboardCompaniesById = async (params: TGetParams, id?: number | string): Promise<TResponseSingleData<TDashboardCompanyItem>> => {
	const response = await api.get(`/dashboard/companies/${id}`, { params });
	return response.data;
};

const axiosGetDashboardCompaniesGroupsById = async (id?: number | string): Promise<TResponseSingleData<TGroup>> => {
	const response = await api.get(`/dashboard/companies/groups/${id}`);
	return response.data;
};

const axiosGetDashboardAdmins = async (): Promise<TResponseData<TDashboardAdmin>> => {
	const response = await api.get(`/dashboard/admins`);
	return response.data;
};

const axiosGetDashboardStudentsRating = async (id?: number | string): Promise<TResponse<TDashboardStudentsRating>> => {
	const response = await api.get(`/dashboard/students/rating/${id}`);
	return response.data;
};

const axiosGetDashboardTeachersRating = async (id?: number | string): Promise<TResponse<TDashboardTeachersRating>> => {
	const response = await api.get(`/dashboard/teachers/rating/${id}`);
	return response.data;
};

const axiosGetDashboardFinances = async (params: TGetParams, id?: number | string): Promise<TDashboardFinance> => {
	const response = await api.get(`dashboard/finance/${id}`, { params });
	return response.data;
};

export {
	axiosGetDashboardCompanies,
	axiosGetDashboardCompaniesById,
	axiosGetDashboardCompaniesGroupsById,
	axiosGetDashboardAdmins,
	axiosGetDashboardStudentsRating,
	axiosGetDashboardTeachersRating,
	axiosGetDashboardFinances,
};
