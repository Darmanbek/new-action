import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { App } from "antd";
import { errorResponse } from "src/utils";
import { TGetParams, TResponseError } from "../index.types";
import {
	axiosCreateAcceptances,
	axiosDeleteAcceptances,
	axiosEditAcceptances,
	axiosGetAcceptances,
} from "./acceptance.services";

const useGetAcceptancesQuery = (params: TGetParams) => {
	const { message } = App.useApp();
	return useQuery({
		queryFn: () => axiosGetAcceptances(params),
		queryKey: ["acceptances", ...Object.values(params)],
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useCreateAcceptancesMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosCreateAcceptances,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["acceptances"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useEditAcceptancesMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosEditAcceptances,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["acceptances"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useDeleteAcceptancesMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosDeleteAcceptances,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["acceptances"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

export {
	useGetAcceptancesQuery,
	useCreateAcceptancesMutation,
	useEditAcceptancesMutation,
	useDeleteAcceptancesMutation,
};
