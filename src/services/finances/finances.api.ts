import { useQuery } from "@tanstack/react-query"
import { useMessage } from "src/hooks"
import { TGetParams, TResponseError } from "src/services/shared"
import { errorResponse } from "src/utils"
import {
	axiosGetFinances,
	axiosGetFinancesCompanies,
	axiosGetFinancesCompaniesById
} from "./finances.services"

const useGetFinancesQuery = (params: TGetParams) => {
	const { message } = useMessage()
	return useQuery({
		queryFn: () => axiosGetFinances(params),
		queryKey: ["finances", ...Object.values(params)],
		keepPreviousData: true,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useGetFinancesCompaniesQuery = (params: TGetParams) => {
	const { message } = useMessage()
	return useQuery({
		queryFn: () => axiosGetFinancesCompanies(params),
		queryKey: ["finances-companies", ...Object.values(params)],
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

const useGetFinancesCompaniesByIdQuery = (params: TGetParams, id?: number | string) => {
	const { message } = useMessage()
	return useQuery({
		queryFn: () => axiosGetFinancesCompaniesById(params, id),
		queryKey: ["finances-companies", ...Object.values(params), id],
		enabled: !!id,
		keepPreviousData: true,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error))
		}
	})
}

export { useGetFinancesQuery, useGetFinancesCompaniesQuery, useGetFinancesCompaniesByIdQuery }
