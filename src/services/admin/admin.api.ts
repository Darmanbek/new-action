import { App } from 'antd';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  axiosGetAdmins,
  axiosCreateAdmins,
  axiosDeleteAdmins,
  axiosEditAdmins,
} from './admin.services';
import { TResponseError } from '../index.types';

const useGetAdminsQuery = () => {
  const { message } = App.useApp();
  const query = useQuery({
    queryFn: axiosGetAdmins,
    queryKey: ['admins'],
    onError: (error: TResponseError) => {
      message.error(error.response.data.message);
    },
  });
  return query;
};

const useCreateAdminsMutation = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: axiosCreateAdmins,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['admins'],
      });
      message.success('Успешно');
    },
    onError: (error: TResponseError) => {
      message.error(error.response.data.message);
    },
  });
  return mutation;
};

const useEditAdminsMutation = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: axiosEditAdmins,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['admins'],
      });
      message.success('Успешно');
    },
    onError: (error: TResponseError) => {
      message.error(error.response.data.message);
    },
  });
  return mutation;
};

const useDeleteAdminsMutation = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: axiosDeleteAdmins,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['admins'],
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
  useGetAdminsQuery,
  useCreateAdminsMutation,
  useEditAdminsMutation,
  useDeleteAdminsMutation,
};
