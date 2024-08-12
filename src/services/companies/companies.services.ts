import { api } from 'src/api';
import { TResponseData, TResponseSingleData } from '../index.types';
import { TCompany, TCompanyChange } from './companies.types';

const axiosGetCompanies = async (): Promise<TResponseData<TCompany>> => {
  const response = await api.get(`/admin/companies`);
  return response.data;
};

const axiosCreateCompanies = async (
  value: TCompanyChange
): Promise<TResponseSingleData<TCompany>> => {
  const response = await api.post(`/admin/companies`, value);
  return response.data;
};

const axiosEditCompanies = async (
  value: TCompanyChange
): Promise<TResponseSingleData<TCompany>> => {
  const response = await api.put(`/admin/companies/${value.id}`, value);
  return response.data;
};

const axiosDeleteCompanies = async (id?: number | string): Promise<void> => {
  const response = await api.delete(`/admin/companies/${id}`);
  return response.data;
};

export {
  axiosGetCompanies,
  axiosCreateCompanies,
  axiosEditCompanies,
  axiosDeleteCompanies,
};
