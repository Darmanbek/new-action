import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useMessage } from "src/hooks"
import type { TResponseError } from "src/services/shared"
import { errorResponse } from "src/utils"
import {
	axiosCreateStories,
	axiosDeleteStories,
	axiosEditStories,
	axiosGetStories
} from "./stories.services"

const useGetStoriesQuery = () => {
	const { message } = useMessage()
	return useQuery({
		queryFn: axiosGetStories,
		queryKey: ["stories"],
		keepPreviousData: true,
		onError: async (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useCreateStoriesMutation = () => {
	const { message } = useMessage()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: axiosCreateStories,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["stories"]
			})
			message.success("Успешно")
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useEditStoriesMutation = () => {
	const { message } = useMessage()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: axiosEditStories,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["stories"]
			})
			message.success("Успешно")
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useDeleteStoriesMutation = () => {
	const { message } = useMessage()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: axiosDeleteStories,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["stories"]
			})
			message.success("Успешно")
		},
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

export {
	useGetStoriesQuery,
	useCreateStoriesMutation,
	useEditStoriesMutation,
	useDeleteStoriesMutation
}
