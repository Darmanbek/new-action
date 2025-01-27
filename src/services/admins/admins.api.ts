import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useAuth, useMessage } from "src/hooks"
import { TResponseError } from "src/services/shared"
import { errorResponse } from "src/utils"
import {
	axiosCreateAdmins,
	axiosDeleteAdmins,
	axiosEditAdmins,
	axiosGetAdmins
} from "./admins.services"

const adminsQueryOptions = {
	queryFn: axiosGetAdmins,
	queryKey: ["admins"]
}

const useGetAdminsQuery = () => {
	const { message } = useMessage()
	const { isDirector } = useAuth()
	return useQuery({
		queryFn: () => axiosGetAdmins(isDirector ? "dashboard" : "admin"),
		queryKey: ["admins"],
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useCreateAdminsMutation = () => {
	const { message } = useMessage()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: axiosCreateAdmins,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["admins"]
			})
			message.success("Успешно")
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useEditAdminsMutation = () => {
	const { message } = useMessage()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: axiosEditAdmins,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["admins"]
			})
			message.success("Успешно")
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useDeleteAdminsMutation = () => {
	const { message } = useMessage()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: axiosDeleteAdmins,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["admins"]
			})
			message.success("Успешно")
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

export {
	adminsQueryOptions,
	useGetAdminsQuery,
	useCreateAdminsMutation,
	useEditAdminsMutation,
	useDeleteAdminsMutation
}
