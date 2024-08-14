import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { App } from "antd";
import { errorResponse } from "src/utils";
import { TResponseError } from "src/services/index.types";
import {
	axiosCreateAdmins,
	axiosDeleteAdmins,
	axiosEditAdmins,
	axiosGetAdmins,
} from "./admin.services";

const useGetAdminsQuery = () => {
	const { message } = App.useApp();
	return useQuery({
		queryFn: axiosGetAdmins,
		queryKey: ["admins"],
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useCreateAdminsMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosCreateAdmins,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["admins"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useEditAdminsMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosEditAdmins,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["admins"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useDeleteAdminsMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosDeleteAdmins,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["admins"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

export {
	useGetAdminsQuery,
	useCreateAdminsMutation,
	useEditAdminsMutation,
	useDeleteAdminsMutation,
};
