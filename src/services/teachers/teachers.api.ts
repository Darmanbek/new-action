import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { App } from "antd";
import { TGetParams, TResponseError } from "src/services/index.types";
import { errorResponse } from "src/utils";
import {
	axiosCreateTeachers,
	axiosDeleteTeachers,
	axiosEditTeachers,
	axiosGetTeachers,
	axiosGetTeachersById,
} from "src/services/shared/teachers/teachers.services";

const useGetTeachersQuery = (params: TGetParams) => {
	const { message } = App.useApp();
	const query = useQuery({
		queryFn: () => axiosGetTeachers(params),
		queryKey: ["teachers", ...Object.values(params)],
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
	return query;
};

const useGetTeachersByIdQuery = (id?: string | number) => {
	const { message } = App.useApp();
	return useQuery({
		queryFn: () => axiosGetTeachersById(id),
		queryKey: ["teachers", id],
		enabled: !!id,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useCreateTeachersMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosCreateTeachers,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["teachers"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useEditTeachersMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosEditTeachers,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["teachers"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useDeleteTeachersMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosDeleteTeachers,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["teachers"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

export {
	useGetTeachersQuery,
	useCreateTeachersMutation,
	useEditTeachersMutation,
	useDeleteTeachersMutation,
	useGetTeachersByIdQuery,
};
