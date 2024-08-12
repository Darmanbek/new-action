import { App } from 'antd';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosGetHoliday, axiosEditHoliday } from './holiday.services';
import { TResponseError } from '../index.types';

const useGetHolidayQuery = () => {
  const { message } = App.useApp();
  const query = useQuery({
    queryFn: axiosGetHoliday,
    queryKey: ['holiday'],
    onError: (error: TResponseError) => {
      message.error(error.response.data.message);
    },
  });
  return query;
};

const useEditHolidayMutation = () => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: axiosEditHoliday,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['holiday'],
      });
      message.success('Успешно');
    },
    onError: (error: TResponseError) => {
      message.error(error.response.data.message);
    },
  });
  return mutation;
};

export { useGetHolidayQuery, useEditHolidayMutation };
