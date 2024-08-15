import { api } from "src/api";
import { TGetParams, TResponseSingleData } from "src/services/index.types";
import { TFinance, TFinanceCompanies } from "./finance.types";

const axiosGetFinance = async (params: TGetParams): Promise<TResponseSingleData<TFinance>> => {
	const response = await api.get(`/admin/finance`, { params });
	return response.data;
};

const axiosGetFinanceCompanies = async (params: TGetParams): Promise<TResponseSingleData<TFinanceCompanies>> => {
	const response = await api.get(`/admin/finance/companies`, { params });
	return response.data;
};

const axiosGetFinanceCompaniesById = async (params: TGetParams, id?: number | string): Promise<TResponseSingleData<TFinance>> => {
	const response = await api.get(`/admin/finance/companies/${id}`, { params });
	return response.data;
};


export {
	axiosGetFinance,
	axiosGetFinanceCompanies,
	axiosGetFinanceCompaniesById
};
