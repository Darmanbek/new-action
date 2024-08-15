import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMessage } from "src/hooks";
import { errorResponse } from "src/utils";
import { TResponseError } from "src/services/index.types";
import {
	axiosCreateAdmins,
	axiosDeleteAdmins,
	axiosEditAdmins,
	axiosGetAdmins,
} from "./admin.services";

const useGetAdminsQuery = () => {
	const { message } = useMessage();
	return useQuery({
		queryFn: axiosGetAdmins,
		queryKey: ["admins"],
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useCreateAdminsMutation = () => {
	const { message } = useMessage();
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
	const { message } = useMessage();
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
	const { message } = useMessage();
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
