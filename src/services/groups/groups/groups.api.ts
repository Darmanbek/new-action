import { App } from 'antd';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  axiosGetGroups,
  axiosGetGroupsById,
  axiosCreateGroups,
  axiosEditGroups,
  axiosDeleteGroups,
} from './groups.services';
import { TResponseError, TGetParamsChange } from '../../index.types';

const useGetGroupsQuery = (params: TGetParamsChange) => {
  const { message } = App.useApp();
  const query = useQuery({
    queryFn: () => axiosGetGroups(params),
    queryKey: ['groups', ...Object.values(params)],
    onError: (error: TResponseError) => {
      message.error(error.response.data.message);
    },
  });
  return query;
};

const useGetGroupsByIdQuery = (id?: string | number) => {
  const { message } = App.useApp();
  const query = useQuery({
    queryFn: () => axiosGetGroupsById(id),
    queryKey: ['groups', id],
    enabled: !!id,
    onError: (error: TResponseError) => {
      message.error(error.response.data.message);
    },
  });
  return query;
};

const useCreateGroupsMutation = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: axiosCreateGroups,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['groups'],
      });
      message.success('Успешно');
    },
    onError: (error: TResponseError) => {
      message.error(error.response.data.message);
    },
  });
  return mutation;
};

const useEditGroupsMutation = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: axiosEditGroups,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['groups'],
      });
      message.success('Успешно');
    },
    onError: (error: TResponseError) => {
      message.error(error.response.data.message);
    },
  });
  return mutation;
};

const useDeleteGroupsMutation = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: axiosDeleteGroups,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['groups'],
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
  useGetGroupsQuery,
  useGetGroupsByIdQuery,
  useCreateGroupsMutation,
  useEditGroupsMutation,
  useDeleteGroupsMutation,
};
