import { useQuery } from "@tanstack/react-query"
import { useMessage } from "src/hooks"
import { TGetParams, TResponseError } from "src/services/shared"
import { errorResponse } from "src/utils"
import {
	axiosGetDashboardCompanies,
	axiosGetDashboardFinances,
	axiosGetDashboardStudentsRating,
	axiosGetDashboardTeachersRating
} from "./dashboard.services"

const useGetDashboardCompaniesQuery = () => {
	const { message } = useMessage()
	return useQuery({
		queryFn: axiosGetDashboardCompanies,
		queryKey: ["dashboard-companies"],
		keepPreviousData: true,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useGetDashboardStudentsRatingQuery = (params: TGetParams, id?: number | string) => {
	const { message } = useMessage()
	return useQuery({
		queryFn: () => axiosGetDashboardStudentsRating(params, id),
		queryKey: ["dashboard-students-rating", id, ...Object.values(params)],
		keepPreviousData: true,
		enabled: !!id,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useGetDashboardTeachersRatingQuery = (id?: number | string) => {
	const { message } = useMessage()
	return useQuery({
		queryFn: () => axiosGetDashboardTeachersRating(id),
		queryKey: ["dashboard-teachers-rating", id],
		keepPreviousData: true,
		enabled: !!id,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useGetDashboardFinancesQuery = (params: TGetParams, id?: number | string) => {
	const { message } = useMessage()
	return useQuery({
		queryFn: () => axiosGetDashboardFinances(params, id),
		queryKey: ["dashboard-finances", ...Object.values(params), id],
		enabled: !!id,
		keepPreviousData: true,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

export {
	useGetDashboardCompaniesQuery,
	useGetDashboardStudentsRatingQuery,
	useGetDashboardTeachersRatingQuery,
	useGetDashboardFinancesQuery
}
