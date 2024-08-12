import { App } from 'antd';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  axiosGetStudentsChat,
  axiosEditStudentsChat,
  axiosCreateStudentsChat,
} from './chat.services';
import { TResponseError, TGetParamsChange } from '../index.types';

const useGetStudentsChatQuery = (params: TGetParamsChange) => {
  const { message } = App.useApp();
  const query = useQuery({
    queryFn: () => () => axiosGetStudentsChat(params),
    queryKey: ['message', ...Object.values(params)],
    onError: (error: TResponseError) => {
      message.error(error.response.data.message);
    },
    // staleTime: 2000,
  });
  return query;
};

const useEditStudentsChatMutation = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: axiosEditStudentsChat,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['message'],
      });
      message.success('Успешно');
    },
    onError: (error: TResponseError) => {
      message.error(error.response.data.message);
    },
  });
  return mutation;
};

const useCreateStudentsChatMutation = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: axiosCreateStudentsChat,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['message'],
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
  useGetStudentsChatQuery,
  useEditStudentsChatMutation,
  useCreateStudentsChatMutation,
};
