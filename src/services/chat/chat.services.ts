import { api } from 'src/api';
import {
  TResponseData,
  TResponseSingleData,
  TGetParamsChange,
} from '../index.types';
import { TStudentChat } from './chat.types';

const axiosGetStudentsChat = async (
  params: TGetParamsChange
): Promise<TResponseData<TStudentChat>> => {
  const response = await api.post(`/admin/message`, { params });
  return response.data;
};

const axiosEditStudentsChat = async (
  value: string | number
): Promise<TResponseSingleData<TStudentChat>> => {
  const response = await api.put(`/admin/messages/${value.id}`, value);
  return response.data;
};

const axiosCreateStudentsChat = async (
  value: TStudentChat
): Promise<TResponseSingleData<TStudentChat>> => {
  const response = await api.post(`/admin/message/send`, value);
  return response.data;
};

export { axiosGetStudentsChat, axiosEditStudentsChat, axiosCreateStudentsChat };
