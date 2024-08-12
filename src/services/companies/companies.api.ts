import { App } from 'antd';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  axiosGetCompanies,
  axiosCreateCompanies,
  axiosEditCompanies,
  axiosDeleteCompanies,
} from './companies.services';
import { TResponseError } from '../index.types';

const useGetCompaniesQuery = () => {
  const { message } = App.useApp();
  const query = useQuery({
    queryFn: axiosGetCompanies,
    queryKey: ['companies'],
    onError: (error: TResponseError) => {
      message.error(error.response.data.message);
    },
  });
  return query;
};

const useCreateCompaniesMutation = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: axiosCreateCompanies,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['companies'],
      });
      message.success('Успешно');
    },
    onError: (error: TResponseError) => {
      message.error(error.response.data.message);
    },
  });
  return mutation;
};

const useEditCompaniesMutation = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: axiosEditCompanies,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['companies'],
      });
      message.success('Успешно');
    },
    onError: (error: TResponseError) => {
      message.error(error.response.data.message);
    },
  });
  return mutation;
};

const useDeleteCompaniesMutation = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: axiosDeleteCompanies,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['companies'],
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
  useGetCompaniesQuery,
  useCreateCompaniesMutation,
  useEditCompaniesMutation,
  useDeleteCompaniesMutation,
};
