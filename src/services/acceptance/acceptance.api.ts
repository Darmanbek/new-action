import { App } from 'antd';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  axiosGetAcceptances,
  axiosCreateAcceptances,
  axiosEditAcceptances,
  axiosDeleteAcceptances,
} from './acceptance.services';
import { TResponseError, TGetParamsChange } from '../index.types';

const useGetAcceptancesQuery = (params: TGetParamsChange) => {
  const { message } = App.useApp();
  const query = useQuery({
    queryFn: () => axiosGetAcceptances(params),
    queryKey: ['acceptances', ...Object.values(params)],
    onError: (error: TResponseError) => {
      message.error(error.response.data.message);
    },
  });
  return query;
};

const useCreateAcceptancesMutation = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: axiosCreateAcceptances,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['acceptances'],
      });
      message.success('Успешно');
    },
    onError: (error: TResponseError) => {
      message.error(error.response.data.message);
    },
  });
  return mutation;
};

const useEditAcceptancesMutation = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: axiosEditAcceptances,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['acceptances'],
      });
      message.success('Успешно');
    },
    onError: (error: TResponseError) => {
      message.error(error.response.data.message);
    },
  });
  return mutation;
};

const useDeleteAcceptancesMutation = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: axiosDeleteAcceptances,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['acceptances'],
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
  useGetAcceptancesQuery,
  useCreateAcceptancesMutation,
  useEditAcceptancesMutation,
  useDeleteAcceptancesMutation,
};
