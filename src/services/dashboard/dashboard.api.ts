import { useQuery } from "@tanstack/react-query";
import { useMessage } from "src/hooks";
import { TGetParams, TResponseError } from "src/services/index.types";
import { errorResponse } from "src/utils";
import {
	axiosGetDashboardCompanies,
	axiosGetDashboardCompaniesById,
	axiosGetDashboardCompaniesGroupsById,
	axiosGetDashboardCompaniesGroupsByIdCalendar,
	axiosGetDashboardCompaniesGroupsByIdLessons,
	axiosGetDashboardCompaniesGroupsByIdAssessments,
	axiosGetDashboardAdmins,
	axiosGetDashboardStudentsRating,
	axiosGetDashboardTeachersRating,
	axiosGetDashboardFinances,
	axiosGetDashboardHolidays,
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

const useGetDashboardCompaniesGroupsByIdQuery = (id?: number | string) => {
	const { message } = useMessage();
	return useQuery({
		queryFn: () => axiosGetDashboardCompaniesGroupsById(id),
		queryKey: ["dashboard-companies-groups", id],
		enabled: !!id,
		keepPreviousData: true,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useGetDashboardCompaniesGroupsByIdCalendarQuery = (params: TGetParams, id?: number | string) => {
	const { message } = useMessage();
	return useQuery({
		queryFn: () => axiosGetDashboardCompaniesGroupsByIdCalendar(params, id),
		queryKey: ["dashboard-companies-groups-calendar", id, ...Object.values(params)],
		enabled: !!id,
		keepPreviousData: true,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useGetDashboardCompaniesGroupsByIdLessonsQuery = (id?: number | string) => {
	const { message } = useMessage();
	return useQuery({
		queryFn: () => axiosGetDashboardCompaniesGroupsByIdLessons(id),
		queryKey: ["dashboard-companies-groups-lessons", id],
		enabled: !!id,
		keepPreviousData: true,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useGetDashboardCompaniesGroupsByIdAssessmentsQuery = (id?: number | string) => {
	const { message } = useMessage();
	return useQuery({
		queryFn: () => axiosGetDashboardCompaniesGroupsByIdAssessments(id),
		queryKey: ["dashboard-companies-groups-calendar", id],
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

const useGetDashboardFinancesQuery = (params: TGetParams, id?: number | string) => {
	const { message } = useMessage();
	return useQuery({
		queryFn: () => axiosGetDashboardFinances(params, id),
		queryKey: ["dashboard-finances", ...Object.values(params), id],
		enabled: !!id,
		keepPreviousData: true,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

const useGetDashboardHolidaysQuery = (params: TGetParams, id?: number | string) => {
	const { message } = useMessage();
	return useQuery({
		queryFn: () => axiosGetDashboardHolidays(params, id),
		queryKey: ["dashboard-holidays", ...Object.values(params), id],
		enabled: !!id,
		keepPreviousData: true,
		onError: (error: TResponseError) => {
			message.error(errorResponse(error));
		},
	});
};

export {
	useGetDashboardCompaniesQuery,
	useGetDashboardCompaniesByIdQuery,
	useGetDashboardCompaniesGroupsByIdQuery,
	useGetDashboardCompaniesGroupsByIdCalendarQuery,
	useGetDashboardCompaniesGroupsByIdLessonsQuery,
	useGetDashboardCompaniesGroupsByIdAssessmentsQuery,
	useGetDashboardAdminsQuery,
	useGetDashboardStudentsRatingQuery,
	useGetDashboardTeachersRatingQuery,
	useGetDashboardFinancesQuery,
	useGetDashboardHolidaysQuery,
};
