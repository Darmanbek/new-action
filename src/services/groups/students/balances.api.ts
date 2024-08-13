import { useMutation, useQueryClient } from "@tanstack/react-query";
import { App } from "antd";
import { TResponseError } from "src/services/index.types";
import { errorResponse } from "src/utils";
import { axiosCreateGroupStudentsBalances } from "./balances.services";

const useCreateGroupStudentsBalancesMutation = () => {
	const { message } = App.useApp();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosCreateGroupStudentsBalances,
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

export { useCreateGroupStudentsBalancesMutation };
