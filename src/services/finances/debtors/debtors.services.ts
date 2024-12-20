import { api } from "src/api";
import { TResponse, TGetParams, TResponseSingleData } from "src/services/index.types";
import { TFinanceDebtors, TFinanceDebtorsChange } from "./debtors.types";

const axiosGetDebtors = async (
	params: TGetParams,
): Promise<TResponse<TFinanceDebtors>> => {
	const response = await api.get(`/admin/debtors`, { params });
	return response.data;
};

const axiosCreateDebtorsComments = async (form: TFinanceDebtorsChange): Promise<TResponseSingleData<TFinanceDebtors>> => {
	const response = await api.post(`/admin/debtors/comment`, form);
	return response.data;
};

const axiosEditDebtors = async (
	value: TFinanceDebtors,
): Promise<TResponse<TFinanceDebtors>> => {
	const response = await api.put(`/admin/debtors/${value.id}`, value);
	return response.data;
};

export { axiosGetDebtors, axiosCreateDebtorsComments, axiosEditDebtors };
