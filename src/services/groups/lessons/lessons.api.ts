import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { App } from "antd";
import { TResponseError } from "src/services/index.types";
import { errorResponse } from "src/utils";
import { axiosDeleteGroupLessons, axiosEditGroupLessons, axiosGetGroupLessons, } from "./lessons.services";

const useGetGroupLessonsQuery = () => {
	const { message } = App.useApp();
	return useQuery({
		queryFn: axiosGetGroupLessons,
		queryKey: ["lessons"],
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useEditGroupLessonsMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosDeleteGroupLessons,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["lessons"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useDeleteGroupLessonsMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosEditGroupLessons,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["lessons"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

export {
	useGetGroupLessonsQuery,
	useEditGroupLessonsMutation,
	useDeleteGroupLessonsMutation,
};
