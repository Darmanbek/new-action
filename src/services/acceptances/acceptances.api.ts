import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useMessage } from "src/hooks"
import { TGetParams, TResponseError } from "src/services/shared"
import { errorResponse } from "src/utils"
import {
	axiosCreateAcceptance,
	axiosDeleteAcceptance,
	axiosEditAcceptance,
	axiosGetAcceptance
} from "./acceptances.services"

const useGetAcceptanceQuery = (params: TGetParams) => {
	const { message } = useMessage()
	return useQuery({
		queryFn: () => axiosGetAcceptance(params),
		queryKey: ["acceptance", ...Object.values(params)],
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useCreateAcceptanceMutation = () => {
	const { message } = useMessage()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: axiosCreateAcceptance,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["acceptance"]
			})
			message.success("Успешно")
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useEditAcceptanceMutation = () => {
	const { message } = useMessage()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: axiosEditAcceptance,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["acceptance"]
			})
			queryClient.invalidateQueries({
				queryKey: ["groups"]
			})
			message.success("Успешно")
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useDeleteAcceptanceMutation = () => {
	const { message } = useMessage()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: axiosDeleteAcceptance,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["acceptance"]
			})
			message.success("Успешно")
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

export {
	useGetAcceptanceQuery,
	useCreateAcceptanceMutation,
	useEditAcceptanceMutation,
	useDeleteAcceptanceMutation
}
