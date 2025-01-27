import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useMessage } from "src/hooks"
import { TResponseError } from "src/services/shared"
import { errorResponse } from "src/utils"
import { axiosCreateBalance } from "./balance.services"

const useCreateBalanceMutation = () => {
	const { message } = useMessage()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: axiosCreateBalance,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["groups-students"]
			})
			message.success("Успешно")
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

export { useCreateBalanceMutation }
