import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { App } from "antd";

import {
	axiosGetStudents,
	axiosDeleteStudents,
	axiosEditStudents,
	axiosCreateStudents,
} from "./students.services";

import { TResponseError } from "../index.types";

const useGetStudentsQuery = () => {
	const { message } = App.useApp();
	const query = useQuery({
		queryFn: axiosGetStudents,
		queryKey: ["students"],
		onError: (error: TResponseError) => {
			message.error(error.response.data.message);
		},
	});
	return query;
};

const useCreateStudentsMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: axiosCreateStudents,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["students"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(error.response.data.message);
		},
	});
	return mutation;
};

const useEditStudentsMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: axiosEditStudents,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["students"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(error.response.data.message);
		},
	});
	return mutation;
};

const useDeleteStudentsMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: axiosDeleteStudents,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["students"],
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
	useGetStudentsQuery,
	useCreateStudentsMutation,
	useEditStudentsMutation,
	useDeleteStudentsMutation,
};
