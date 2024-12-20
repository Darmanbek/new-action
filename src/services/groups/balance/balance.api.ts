import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useMessage } from "src/hooks";
import { errorResponse } from "src/utils";
import { TResponseError } from "src/services/index.types";
import { axiosCreateBalance } from "src/services/groups/balance/balance.services";

const useCreateBalanceMutation = () => {
	const { message } = useMessage();
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: axiosCreateBalance,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["groups-students"],
			});
			message.success("Успешно");
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

export { useCreateBalanceMutation };
