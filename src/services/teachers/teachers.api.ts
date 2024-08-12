import { App } from 'antd';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  axiosGetTeachers,
  axiosGetTeachersById,
  axiosEditTeachers,
  axiosCreateTeachers,
  axiosDeleteTeachers,
} from './teachers.services';
import { TResponseError, TGetParamsChange } from '../index.types';

const useGetTeachersQuery = (params: TGetParamsChange) => {
  const { message } = App.useApp();
  const query = useQuery({
    queryFn: () => axiosGetTeachers(params),
    queryKey: ['teachers', ...Object.values(params)],
    onError: (error: TResponseError) => {
      message.error(error.response.data.message);
    },
  });
  return query;
};

const useGetTeachersByIdQuery = (id?: string | number) => {
  const { message } = App.useApp();
  const query = useQuery({
    queryFn: () => axiosGetTeachersById(id),
    queryKey: ['teachers', id],
    enabled: !!id,
    onError: (error: TResponseError) => {
      message.error(error.response.data.message);
    },
  });
  return query;
};

const useCreateTeachersMutation = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: axiosCreateTeachers,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['teachers'],
      });
      message.success('Успешно');
    },
    onError: (error: TResponseError) => {
      message.error(error.response.data.message);
    },
  });
  return mutation;
};

const useEditTeachersMutation = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: axiosEditTeachers,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['teachers'],
      });
      message.success('Успешно');
    },
    onError: (error: TResponseError) => {
      message.error(error.response.data.message);
    },
  });
  return mutation;
};

const useDeleteTeachersMutation = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: axiosDeleteTeachers,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['teachers'],
      });
      message.success('Успешно');
    },
    onError: (error: TResponseError) => {
      message.error(error.response.data.message);
    },
  });
  return mutation;
};

export {
  useGetTeachersQuery,
  useCreateTeachersMutation,
  useEditTeachersMutation,
  useDeleteTeachersMutation,
  useGetTeachersByIdQuery,
};
