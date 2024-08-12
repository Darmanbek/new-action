import { api } from 'src/api';
import { TResponse, TResponseSingleData } from '../index.types';
import { TAcceptance, TGetParamsChange } from '../index.types';

const axiosGetAcceptances = async (
  params: TGetParamsChange
): Promise<TResponse<TAcceptance>> => {
  const response = await api.get(`/admin/acceptances`, { params });
  return response.data;
};

const axiosCreateAcceptances = async (
  value: TAcceptance
): Promise<TResponseSingleData<TAcceptance>> => {
  const response = await api.post(`/admin/acceptances`, value);
  return response.data;
};

const axiosEditAcceptances = async (
  value: TAcceptance
): Promise<TResponseSingleData<TAcceptance>> => {
  const response = await api.put(`/admin/acceptances/${value.id}`, value);
  return response.data;
};

const axiosDeleteAcceptances = async (
  id?: number | string
): Promise<TResponseSingleData<void>> => {
  const response = await api.delete(`/admin/acceptances/${id}`);
  return response.data;
};

export {
  axiosGetAcceptances,
  axiosCreateAcceptances,
  axiosEditAcceptances,
  axiosDeleteAcceptances,
};
