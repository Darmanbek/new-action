import { api } from "src/api";
import { TResponseData } from "src/services/index.types";
import { TPaymentType, TPaymentTypeChange } from "./payment.types";

const axiosGetPaymentTypes = async (): Promise<TResponseData<TPaymentType>> => {
	const response = await api.get(`/payment-types`);
	return response.data;
};

const axiosGetPaymentTypesById = async (id?: number | string): Promise<TPaymentType> => {
	const response = await api.get(`/admin/payment-types/${id}`);
	return response.data;
};

const axiosCreatePaymentTypes = async (form: TPaymentTypeChange): Promise<TPaymentType> => {
	const response = await api.post(`/admin/payment-types/`, form);
	return response.data;
};

const axiosEditPaymentTypes = async (form: TPaymentTypeChange): Promise<TPaymentType> => {
	const response = await api.put(`/admin/payment-types/${form.id}`, form);
	return response.data;
};

const axiosDeletePaymentTypes = async (id?: number | string): Promise<void> => {
	const response = await api.delete(`/admin/payment-types/${id}`);
	return response.data;
};

export {
	axiosGetPaymentTypes,
	axiosGetPaymentTypesById,
	axiosCreatePaymentTypes,
	axiosEditPaymentTypes,
	axiosDeletePaymentTypes
};
