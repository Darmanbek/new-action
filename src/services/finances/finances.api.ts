import { useQuery } from "@tanstack/react-query";
import { useMessage } from "src/hooks";
import { TGetParams, TResponseError } from "src/services/index.types";
import { errorResponse } from "src/utils";
import {
	axiosGetFinance,
	axiosGetFinanceCompanies,
	axiosGetFinanceCompaniesById
} from "./finances.services";

const useGetFinanceQuery = (params: TGetParams) => {
	const { message } = useMessage();
	return useQuery({
		queryFn: () => axiosGetFinance(params),
		queryKey: ["finances", ...Object.values(params)],
		keepPreviousData: true,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useGetFinanceCompaniesQuery = (params: TGetParams) => {
	const { message } = useMessage();
	return useQuery({
		queryFn: () => axiosGetFinanceCompanies(params),
		queryKey: ["finances-companies", ...Object.values(params)],
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useGetFinanceCompaniesByIdQuery = (params: TGetParams, id?: number | string) => {
	const { message } = useMessage();
	return useQuery({
		queryFn: () => axiosGetFinanceCompaniesById(params, id),
		queryKey: ["finances-companies", ...Object.values(params), id],
		enabled: !!id,
		keepPreviousData: true,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

export {
	useGetFinanceQuery,
	useGetFinanceCompaniesQuery,
	useGetFinanceCompaniesByIdQuery
};
