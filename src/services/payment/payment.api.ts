import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMessage } from "src/hooks";
import { TResponseError } from "src/services/index.types";
import { errorResponse } from "src/utils";
import {
	axiosGetPaymentTypes,
	axiosGetPaymentTypesById,
	axiosCreatePaymentTypes,
	axiosEditPaymentTypes,
	axiosDeletePaymentTypes
} from "./payment.services";

const useGetPaymentTypesQuery = () => {
	const { message } = useMessage();
	return useQuery({
		queryFn: axiosGetPaymentTypes,
		queryKey: ["payment"],
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useGetPaymentTypesByIdQuery = (id?: number | string) => {
	const { message } = useMessage();
	return useQuery({
		queryFn: () => axiosGetPaymentTypesById(id),
		queryKey: ["payment", id],
		enabled: !!id,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useCreatePaymentTypesMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosCreatePaymentTypes,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["payment"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useEditPaymentTypesMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosEditPaymentTypes,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["payment"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useDeletePaymentTypesMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosDeletePaymentTypes,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["payment"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

export {
	useGetPaymentTypesQuery,
	useGetPaymentTypesByIdQuery,
	useCreatePaymentTypesMutation,
	useEditPaymentTypesMutation,
	useDeletePaymentTypesMutation
};
