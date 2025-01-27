import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useMessage } from "src/hooks"
import { TResponseError } from "src/services/shared"
import { errorResponse } from "src/utils"
import { axiosCreateFrozenStatus } from "./frozen-status.services"

const useCreateFrozenStatusMutation = () => {
	const { message } = useMessage()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: axiosCreateFrozenStatus,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["frozen-status"]
			})
			queryClient.invalidateQueries({
				queryKey: ["groups"]
			})
			queryClient.invalidateQueries({
				queryKey: ["groups-students"]
			})
			queryClient.invalidateQueries({
				queryKey: ["groups-assessments"]
			})
			message.success("Успешно")
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

export { useCreateFrozenStatusMutation }
