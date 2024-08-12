import { App } from 'antd';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosGetDebtors, axiosEditDebtors } from './debtors.services';
import { TResponseError, TGetParamsChange } from '../../index.types';

const useGetDebtorsQuery = (params: TGetParamsChange) => {
  const { message } = App.useApp();
  const query = useQuery({
    queryFn: () => axiosGetDebtors(params),
    queryKey: ['debtors', ...Object.values(params)],
    onError: (error: TResponseError) => {
      message.error(error.response.data.message);
    },
  });
  return query;
};

const useEditDebtorsMutation = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: axiosEditDebtors,
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

export { useGetDebtorsQuery, useEditDebtorsMutation };
