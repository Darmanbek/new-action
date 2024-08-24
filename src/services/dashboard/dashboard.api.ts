import { useQuery } from "@tanstack/react-query";
import { useMessage } from "src/hooks";
import { TGetParams, TResponseError } from "src/services/index.types";
import { errorResponse } from "src/utils";
import {
	axiosGetDashboardCompanies,
	axiosGetDashboardCompaniesById,
	axiosGetDashboardAdmins,
	axiosGetDashboardStudentsRating,
	axiosGetDashboardTeachersRating
} from "./dashboard.services";

const useGetDashboardCompaniesQuery = () => {
	const { message } = useMessage();
	return useQuery({
		queryFn: axiosGetDashboardCompanies,
		queryKey: ["dashboard-companies"],
		keepPreviousData: true,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useGetDashboardCompaniesByIdQuery = (params: TGetParams, id?: number | string) => {
	const { message } = useMessage();
	return useQuery({
		queryFn: () => axiosGetDashboardCompaniesById(params, id),
		queryKey: ["dashboard-companies", ...Object.values(params), id],
		enabled: !!id,
		keepPreviousData: true,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useGetDashboardAdminsQuery = () => {
	const { message } = useMessage();
	return useQuery({
		queryFn: axiosGetDashboardAdmins,
		queryKey: ["dashboard-admins"],
		keepPreviousData: true,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useGetDashboardStudentsRatingQuery = (id?: number | string) => {
	const { message } = useMessage();
	return useQuery({
		queryFn: () => axiosGetDashboardStudentsRating(id),
		queryKey: ["dashboard-students-rating", id],
		keepPreviousData: true,
		enabled: !!id,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useGetDashboardTeachersRatingQuery = (id?: number | string) => {
	const { message } = useMessage();
	return useQuery({
		queryFn: () => axiosGetDashboardTeachersRating(id),
		queryKey: ["dashboard-teachers-rating", id],
		keepPreviousData: true,
		enabled: !!id,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

export {
	useGetDashboardCompaniesQuery,
	useGetDashboardCompaniesByIdQuery,
	useGetDashboardAdminsQuery,
	useGetDashboardStudentsRatingQuery,
	useGetDashboardTeachersRatingQuery
};
