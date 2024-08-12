import { api } from 'src/api';
import { TResponse, TGetParamsChange } from '../../index.types';
import { TFinanceDebtors } from './debtors.types';

const axiosGetDebtors = async (
  params: TGetParamsChange
): Promise<TResponse<TFinanceDebtors>> => {
  const response = await api.get(`/admin/debtors`, { params });
  return response.data;
};

const axiosEditDebtors = async (
  value: TFinanceDebtors
): Promise<TResponse<TFinanceDebtors>> => {
  const response = await api.put(`/admin/debtors/${value.id}`, value);
  return response.data;
};

export { axiosGetDebtors, axiosEditDebtors };
