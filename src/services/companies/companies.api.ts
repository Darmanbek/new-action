import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useAuth, useMessage } from "src/hooks"
import {
	axiosCreateCompanies,
	axiosDeleteCompanies,
	axiosEditCompanies,
	axiosGetCompanies
} from "src/services/companies/companies.services"
import { TResponseError } from "src/services/shared"
import { errorResponse } from "src/utils"

const useGetCompaniesQuery = () => {
	const { message } = useMessage()
	const {isDirector} = useAuth()
	return useQuery({
		queryFn: () => axiosGetCompanies(isDirector ? "dashboard": "admin"),
		queryKey: ["companies"],
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useCreateCompaniesMutation = () => {
	const { message } = useMessage()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: axiosCreateCompanies,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["companies"]
			})
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

const useEditCompaniesMutation = () => {
	const { message } = useMessage()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: axiosEditCompanies,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["companies"]
			})
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

const useDeleteCompaniesMutation = () => {
	const { message } = useMessage()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: axiosDeleteCompanies,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["companies"]
			})
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
	useGetCompaniesQuery,
	useCreateCompaniesMutation,
	useEditCompaniesMutation,
	useDeleteCompaniesMutation
}
