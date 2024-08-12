import { api } from 'src/api';
import { TResponseData, TResponseSingleData } from '../../index.types';
import { TGroupLesson } from './lessons.types';

const axiosGetGroupLessons = async (): Promise<TResponseData<TGroupLesson>> => {
  const response = await api.get(`/admin/lessons`);
  return response.data;
};

const axiosEditGroupLessons = async (
  value: TGroupLesson
): Promise<TResponseSingleData<TGroupLesson>> => {
  const response = await api.put(`/admin/lessons/edit/${value.id}`, value);
  return response.data;
};

const axiosDeleteGroupLessons = async (id?: number | string): Promise<void> => {
  const response = await api.delete(`/admin/lessons/${id}`);
  return response.data;
};

export { axiosGetGroupLessons, axiosEditGroupLessons, axiosDeleteGroupLessons };
