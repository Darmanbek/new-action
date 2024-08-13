import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { App } from "antd";
import { errorResponse } from "src/utils";
import { TResponseError } from "../index.types";
import { axiosEditHoliday, axiosGetHoliday } from "./holiday.services";

const useGetHolidayQuery = () => {
	const { message } = App.useApp();
	return useQuery({
		queryFn: axiosGetHoliday,
		queryKey: ["holiday"],
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useEditHolidayMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosEditHoliday,
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

export { useGetHolidayQuery, useEditHolidayMutation };
