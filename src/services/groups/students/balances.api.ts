import { App } from 'antd';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosCreateGroupStudentsBalances } from './balances.services';
import { TResponseError } from '../../../index.types';

const useCreateGroupStudentsBalancesMutation = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: axiosCreateGroupStudentsBalances,
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

export { useCreateGroupStudentsBalancesMutation };
