import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useMessage } from "src/hooks"
import { TGetParams, TResponseError } from "src/services/shared"
import { errorResponse } from "src/utils"
import {
	axiosCreateGroups,
	axiosDeleteGroups,
	axiosDeleteGroupsStudents,
	axiosEditGroups,
	axiosGetGroups,
	axiosGetGroupsById,
	axiosGetGroupsByIdAssessments,
	axiosGetGroupsByIdCalendar,
	axiosGetGroupsByIdLessons,
	axiosGetGroupsByIdStudents
} from "./groups.services"
import { TGroupStudentChange } from "./groups.types"

const useGetGroupsQuery = (params: TGetParams) => {
	const { message } = useMessage()
	return useQuery({
		queryFn: () => axiosGetGroups(params),
		queryKey: ["groups", ...Object.values(params)],
		keepPreviousData: true,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useGetGroupsByIdQuery = (id?: string | number) => {
	const { message } = useMessage()
	return useQuery({
		queryFn: () => axiosGetGroupsById(id),
		queryKey: ["groups", id],
		enabled: !!id,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useGetGroupsByIdStudentsQuery = (id?: string | number) => {
	const { message } = useMessage()
	return useQuery({
		queryFn: () => axiosGetGroupsByIdStudents(id),
		queryKey: ["groups-students", id],
		enabled: !!id,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useGetGroupsByIdAssessmentsQuery = (id?: string | number) => {
	const { message } = useMessage()
	return useQuery({
		queryFn: () => axiosGetGroupsByIdAssessments(id),
		queryKey: ["groups-assessments", id],
		enabled: !!id,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useGetGroupsByIdCalendarQuery = (params: TGetParams, id?: string | number) => {
	const { message } = useMessage()
	return useQuery({
		queryFn: () => axiosGetGroupsByIdCalendar(params, id),
		queryKey: ["groups-calendar", id, ...Object.values(params)],
		enabled: !!id,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useGetGroupsByIdLessonsQuery = (id?: string | number) => {
	const { message } = useMessage()
	return useQuery({
		queryFn: () => axiosGetGroupsByIdLessons(id),
		queryKey: ["groups-lessons", id],
		enabled: !!id,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useCreateGroupsMutation = () => {
	const { message } = useMessage()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: axiosCreateGroups,
		onSuccess: () => {
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

const useEditGroupsMutation = () => {
	const { message } = useMessage()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: axiosEditGroups,
		onSuccess: () => {
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

const useDeleteGroupsMutation = () => {
	const { message } = useMessage()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: axiosDeleteGroups,
		onSuccess: () => {
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

const useDeleteGroupsStudentsMutation = (id?: number | string) => {
	const { message } = useMessage()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (form: TGroupStudentChange) => axiosDeleteGroupsStudents(form, id),
		onSuccess: () => {
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

export {
	useGetGroupsQuery,
	useGetGroupsByIdQuery,
	useGetGroupsByIdStudentsQuery,
	useGetGroupsByIdAssessmentsQuery,
	useGetGroupsByIdCalendarQuery,
	useGetGroupsByIdLessonsQuery,
	useCreateGroupsMutation,
	useEditGroupsMutation,
	useDeleteGroupsMutation,
	useDeleteGroupsStudentsMutation
}
