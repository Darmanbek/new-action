import { api } from 'src/api';
import { TResponseData, TResponseSingleData, THoliday } from '../index.types';

const axiosGetHoliday = async (): Promise<TResponseData<THoliday>> => {
  const response = await api.get(`/admin/holiday`);
  return response.data;
};

const axiosEditHoliday = async (
  value: string | number
): Promise<TResponseSingleData<THoliday>> => {
  const response = await api.put(`/admin/holiday/${value}`, value);
  return response.data;
};

export { axiosGetHoliday, axiosEditHoliday };
