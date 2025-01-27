import { api } from "src/api"
import { TGetParams, TResponseSingleData } from "src/services/shared"
import { TFinance, TFinanceCompanies } from "./finances.types"

const axiosGetFinances = async (params: TGetParams): Promise<TResponseSingleData<TFinance>> => {
	const response = await api.get(`/admin/finance`, { params })
	return response.data
}

const axiosGetFinancesCompanies = async (
	params: TGetParams
): Promise<TResponseSingleData<TFinanceCompanies>> => {
	const response = await api.get(`/admin/finance/companies`, { params })
	return response.data
}

const axiosGetFinancesCompaniesById = async (
	params: TGetParams,
	id?: number | string
): Promise<TResponseSingleData<TFinance>> => {
	const response = await api.get(`/admin/finance/companies/${id}`, { params })
	return response.data
}

export { axiosGetFinances, axiosGetFinancesCompanies, axiosGetFinancesCompaniesById }
