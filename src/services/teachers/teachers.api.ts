import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { App } from "antd";

import {
	axiosGetTeachers,
	axiosDeleteTeachers,
	axiosEditTeachers,
	axiosCreateTeachers,
} from "./teachers.services";

import { TResponseError } from "../index.types";

const useGetTeachersQuery = () => {
	const { message } = App.useApp();
	const query = useQuery({
		queryFn: axiosGetTeachers,
		queryKey: ["teachers"],
		onError: (error: TResponseError) => {
			message.error(error.response.data.message);
		},
	});
	return query;
};

const useCreateTeachersMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: axiosCreateTeachers,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["teachers"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(error.response.data.message);
		},
	});
	return mutation;
};

const useEditTeachersMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: axiosEditTeachers,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["teachers"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(error.response.data.message);
		},
	});
	return mutation;
};

const useDeleteTeachersMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: axiosDeleteTeachers,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["teachers"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(error.response.data.message);
		},
	});
	return mutation;
};

export {
	useGetTeachersQuery,
	useCreateTeachersMutation,
	useEditTeachersMutation,
	useDeleteTeachersMutation,
};
