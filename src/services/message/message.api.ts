import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { App } from "antd";
import { errorResponse } from "src/utils";
import { TGetParams, TResponseError } from "../index.types";
import {
	axiosGetMessage,
	axiosGetMessageById,
	axiosCreateMessage,
	axiosEditMessage
} from "./message.services";

const useGetMessageQuery = (params: TGetParams) => {
	const { message } = App.useApp();
	return useQuery({
		queryFn: () => axiosGetMessage(params),
		queryKey: ["message", ...Object.values(params)],
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useGetMessageByIdQuery = (id?: number | string) => {
	const { message } = App.useApp();
	return useQuery({
		queryFn: () => axiosGetMessageById(id),
		queryKey: ["message", id],
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useCreateMessageMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosCreateMessage,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["message"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useEditMessageMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosEditMessage,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["message"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

export {
	useGetMessageQuery,
	useGetMessageByIdQuery,
	useCreateMessageMutation,
	useEditMessageMutation,
};
