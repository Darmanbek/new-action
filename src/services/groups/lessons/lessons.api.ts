import { App } from 'antd';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  axiosGetGroupLessons,
  axiosDeleteGroupLessons,
  axiosEditGroupLessons,
} from './lessons.services';
import { TResponseError } from '../../index.types';

const useGetGroupLessonsQuery = () => {
  const { message } = App.useApp();
  const query = useQuery({
    queryFn: axiosGetGroupLessons,
    queryKey: ['lessons'],
    onError: (error: TResponseError) => {
      message.error(error.response.data.message);
    },
  });
  return query;
};

const useEditGroupLessonsMutation = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: axiosDeleteGroupLessons,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['lessons'],
      });
      message.success('Успешно');
    },
    onError: (error: TResponseError) => {
      message.error(error.response.data.message);
    },
  });
  return mutation;
};

const useDeleteGroupLessonsMutation = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: axiosEditGroupLessons,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['lessons'],
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
  useGetGroupLessonsQuery,
  useEditGroupLessonsMutation,
  useDeleteGroupLessonsMutation,
};
