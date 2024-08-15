import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMessage } from "src/hooks";
import { errorResponse } from "src/utils";
import { TGetParams, TResponseError } from "src/services/index.types";
import { axiosEditDebtors, axiosGetDebtors } from "./debtors.services";

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

export { useGetDebtorsQuery, useEditDebtorsMutation };
