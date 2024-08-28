import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMessage } from "src/hooks";
import { TResponseError } from "src/services/index.types";
import { TGetParams } from "src/services/shared/shared.types";
import { errorResponse } from "src/utils";
import {
	axiosGetHoliday,
	axiosCreateHoliday,
	axiosDeleteHoliday,
} from "./holiday.services";


const useGetHolidayQuery = (params: TGetParams) => {
	const { message } = useMessage();
	return useQuery({
		queryFn: () => axiosGetHoliday(params),
		queryKey: ["holiday", ...Object.values(params)],
		onError: (error: TResponseError) => {
			message.error(error?.response?.data?.message);
		},
	});
};

const useCreateHolidayMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosCreateHoliday,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["holiday"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(error?.response?.data?.message);
		},
	});
};

const useDeleteHolidayMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosDeleteHoliday,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["holiday"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

export {
	useGetHolidayQuery,
	useCreateHolidayMutation,
	useDeleteHolidayMutation,
};
