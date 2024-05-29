import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { App } from "antd";

import {
	axiosGetGroups,
	axiosGetGroupsById,
	axiosCreateGroups,
	axiosCreateGroupsStudent,
	axiosCreateGroupsLesson,
	axiosEditGroups,
	axiosDeleteGroups,
} from "./groups.services";

import { TResponseError } from "../index.types";

const useGetGroupsQuery = () => {
	const { message } = App.useApp();
	const query = useQuery({
		queryFn: axiosGetGroups,
		queryKey: ["groups"],
		onError: (error: TResponseError) => {
			message.error(error.response.data.message);
		},
	});
	return query;
};

const useGetGroupsByIdQuery = (id?: string | number) => {
	const { message } = App.useApp();
	const query = useQuery({
		queryFn: () => axiosGetGroupsById(id),
		queryKey: ["groups", id],
		enabled: !!id,
		onError: (error: TResponseError) => {
			message.error(error.response.data.message);
		},
	});
	return query;
};

const useCreateGroupsMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: axiosCreateGroups,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["groups"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(error.response.data.message);
		},
	});
	return mutation;
};

const useCreateGroupsStudentMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: axiosCreateGroupsStudent,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["groups"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(error.response.data.message);
		},
	});
	return mutation;
};

const useCreateGroupsLessonMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: axiosCreateGroupsLesson,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["groups"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(error.response.data.message);
		},
	});
	return mutation;
};

const useEditGroupsMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: axiosEditGroups,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["groups"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(error.response.data.message);
		},
	});
	return mutation;
};

const useDeleteGroupsMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: axiosDeleteGroups,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["groups"],
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
	useGetGroupsQuery,
	useGetGroupsByIdQuery,
	useCreateGroupsMutation,
	useCreateGroupsStudentMutation,
	useCreateGroupsLessonMutation,
	useEditGroupsMutation,
	useDeleteGroupsMutation,
};
