import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useMessage } from "src/hooks"
import { TGetParams, TResponseError } from "src/services/shared"
import { errorResponse } from "src/utils"
import {
	axiosCreateTeachers,
	axiosDeleteTeachers,
	axiosEditTeachers,
	axiosGetTeachers,
	axiosGetTeachersById
} from "./teachers.services"

const teachersQueryOptions = (params: TGetParams) => ({
	queryFn: () => axiosGetTeachers(params),
	queryKey: ["teachers", ...Object.values(params)]
})

const useGetTeachersQuery = (params: TGetParams) => {
	const { message } = useMessage()
	return useQuery({
		queryFn: () => axiosGetTeachers(params),
		queryKey: ["teachers", ...Object.values(params)],
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useGetTeachersByIdQuery = (id?: string | number) => {
	const { message } = useMessage()
	return useQuery({
		queryFn: () => axiosGetTeachersById(id),
		queryKey: ["teachers", id],
		enabled: !!id,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useCreateTeachersMutation = () => {
	const { message } = useMessage()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: axiosCreateTeachers,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["teachers"]
			})
			message.success("Успешно")
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useEditTeachersMutation = () => {
	const { message } = useMessage()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: axiosEditTeachers,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["teachers"]
			})
			message.success("Успешно")
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useDeleteTeachersMutation = () => {
	const { message } = useMessage()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: axiosDeleteTeachers,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["teachers"]
			})
			message.success("Успешно")
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

export {
	teachersQueryOptions,
	useGetTeachersQuery,
	useCreateTeachersMutation,
	useEditTeachersMutation,
	useDeleteTeachersMutation,
	useGetTeachersByIdQuery
}
