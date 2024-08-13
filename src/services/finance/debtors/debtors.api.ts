import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { App } from "antd";
import { errorResponse } from "src/utils";
import { TGetParams, TResponseError } from "src/services/index.types";
import { axiosEditDebtors, axiosGetDebtors } from "./debtors.services";

const useGetDebtorsQuery = (params: TGetParams) => {
	const { message } = App.useApp();
	return useQuery({
		queryFn: () => axiosGetDebtors(params),
		queryKey: ["debtors", ...Object.values(params)],
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useEditDebtorsMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosEditDebtors,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["teachers"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

export { useGetDebtorsQuery, useEditDebtorsMutation };
