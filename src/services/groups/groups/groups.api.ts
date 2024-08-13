import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { App } from "antd";
import { TGetParams, TResponseError } from "src/services/index.types";
import { errorResponse } from "src/utils";
import {
	axiosCreateGroups,
	axiosDeleteGroups,
	axiosEditGroups,
	axiosGetGroups,
	axiosGetGroupsById,
} from "./groups.services";

const useGetGroupsQuery = (params: TGetParams) => {
	const { message } = App.useApp();
	return useQuery({
		queryFn: () => axiosGetGroups(params),
		queryKey: ["groups", ...Object.values(params)],
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useGetGroupsByIdQuery = (id?: string | number) => {
	const { message } = App.useApp();
	return useQuery({
		queryFn: () => axiosGetGroupsById(id),
		queryKey: ["groups", id],
		enabled: !!id,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useCreateGroupsMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosCreateGroups,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["groups"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useEditGroupsMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosEditGroups,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["groups"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useDeleteGroupsMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosDeleteGroups,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["groups"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

export {
	useGetGroupsQuery,
	useGetGroupsByIdQuery,
	useCreateGroupsMutation,
	useEditGroupsMutation,
	useDeleteGroupsMutation,
};
