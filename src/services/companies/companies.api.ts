import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { App } from "antd";
import { errorResponse } from "src/utils";
import { TResponseError } from "src/services/index.types";
import {
	axiosCreateCompanies,
	axiosDeleteCompanies,
	axiosEditCompanies,
	axiosGetCompanies,
} from "src/services/companies/companies.services";

const useGetCompaniesQuery = () => {
	const { message } = App.useApp();
	return useQuery({
		queryFn: axiosGetCompanies,
		queryKey: ["companies"],
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useCreateCompaniesMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosCreateCompanies,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["companies"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useEditCompaniesMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosEditCompanies,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["companies"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useDeleteCompaniesMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosDeleteCompanies,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["companies"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

export {
	useGetCompaniesQuery,
	useCreateCompaniesMutation,
	useEditCompaniesMutation,
	useDeleteCompaniesMutation,
};
