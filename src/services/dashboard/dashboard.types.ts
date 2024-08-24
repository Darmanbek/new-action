import { TAdmin, TGroup } from "src/services/index.types";

export type TDashboardCompany = {
	id: string;
	name: string;
	admin: TAdmin;
}

export type TDashboardCompanyItem = {
	id: string;
	name: string;
	first_name: string;
	last_name: string;
	groups: TGroup[]
}

export type TDashboardAdmin = {
	id: string;
	first_name: string;
	last_name: string;
	phone: string;
	company: string;
}

export type TDashboardStudentsRating = {
	id: string;
	first_name: string;
	last_name: string;
	phone: string;
	avg_rating: string;
	group: TGroup[];
}

export type TDashboardTeachersRating = {
	id: string;
	first_name: string;
	last_name: string;
	phone: string;
	rating: string;
}
