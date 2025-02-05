import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useAuth, useMessage } from "src/hooks"
import { TGetParams, TParamId, TResponseError } from "src/services/shared"
import { errorResponse } from "src/utils"
import {
	axiosCreateGroups,
	axiosCreateGroupsStudent,
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
	const { companyId, isDirector } = useAuth()
	const { message } = useMessage()
	return useQuery({
		queryFn: () => axiosGetGroups(params, isDirector ? companyId : undefined),
		queryKey: ["groups", companyId, ...Object.values(params)],
		keepPreviousData: true,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useGetGroupsByIdQuery = (id?: string | number) => {
	const { companyId, isDirector } = useAuth()
	const { message } = useMessage()
	return useQuery({
		queryFn: () => axiosGetGroupsById(id, isDirector ? "dashboard/companies" : "admin"),
		queryKey: ["groups", companyId, id],
		enabled: !!id,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useGetGroupsByIdStudentsQuery = (id?: string | number) => {
	const { message } = useMessage()
	const { isDirector } = useAuth()
	return useQuery({
		queryFn: () => axiosGetGroupsByIdStudents(id, isDirector),
		queryKey: ["groups", "students", id],
		enabled: !!id,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useGetGroupsByIdAssessmentsQuery = (id?: string | number) => {
	const { companyId, isDirector } = useAuth()
	const { message } = useMessage()
	return useQuery({
		queryFn: () => axiosGetGroupsByIdAssessments(id, isDirector ? "dashboard/companies" : "admin"),
		queryKey: ["groups", "assessments", companyId, id],
		enabled: !!id,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useGetGroupsByIdCalendarQuery = (params: TGetParams, id: TParamId) => {
	const { companyId, isDirector } = useAuth()
	const { message } = useMessage()
	return useQuery({
		queryFn: () =>
			axiosGetGroupsByIdCalendar(params, id, isDirector ? "dashboard/companies" : "admin"),
		queryKey: ["groups", "calendar", companyId, id, ...Object.values(params)],
		enabled: !!id,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useGetGroupsByIdLessonsQuery = (id?: string | number) => {
	const { companyId, isDirector } = useAuth()
	const { message } = useMessage()
	return useQuery({
		queryFn: () => axiosGetGroupsByIdLessons(id, isDirector ? "dashboard/companies" : "admin"),
		queryKey: ["groups", "lessons", companyId, id],
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

const useCreateGroupsStudentsMutation = () => {
	const { message } = useMessage()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: axiosCreateGroupsStudent,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["groups"]
			})
			queryClient.invalidateQueries({
				queryKey: ["groups", "students"]
			})
			queryClient.invalidateQueries({
				queryKey: ["groups", "assessments"]
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
				queryKey: ["groups", "students"]
			})
			queryClient.invalidateQueries({
				queryKey: ["groups", "assessments"]
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
	useCreateGroupsStudentsMutation,
	useDeleteGroupsStudentsMutation
}
