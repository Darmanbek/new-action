import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMessage } from "src/hooks";
import { errorResponse } from "src/utils";
import { TGetParams, TResponseError } from "src/services/index.types";
import { axiosCreateDebtorsComments, axiosEditDebtors, axiosGetDebtors } from "./debtors.services";

const useGetDebtorsQuery = (params: TGetParams) => {
	const { message } = useMessage();
	return useQuery({
		queryFn: () => axiosGetDebtors(params),
		queryKey: ["debtors", ...Object.values(params)],
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useCreateDebtorsMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosCreateDebtorsComments,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["debtors"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(error?.response?.data?.message);
		},
	});
};


const useEditDebtorsMutation = () => {
	const { message } = useMessage();
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

export { useGetDebtorsQuery, useCreateDebtorsMutation, useEditDebtorsMutation };
