import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useMessage } from "src/hooks";
import { errorResponse } from "src/utils";
import { TResponseError } from "src/services/index.types";
import { axiosCreateBalances } from "./balances.services";

const useCreateBalancesMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosCreateBalances,
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

export { useCreateBalancesMutation };
