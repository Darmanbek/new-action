import loadable from "@loadable/component";
import { createElement } from "react";

import { Loader } from "src/components/shared";

export const DashboardCompanies = loadable(() => import("./companies/Companies"), {
	fallback: createElement(Loader),
});

export const DashboardAdmins = loadable(() => import("./admins/Admins"), {
	fallback: createElement(Loader),
});

export const DashboardTeachers = loadable(() => import("./teachers-rating/TeachersRating"), {
	fallback: createElement(Loader),
});
export const DashboardStudents = loadable(() => import("./students-rating/StudentsRating"), {
	fallback: createElement(Loader),
});
export const DashboardGroups = loadable(() => import("./groups/groups/Groups"), {
	fallback: createElement(Loader),
});
export const DashboardGroup = loadable(() => import("./groups/group/Group"), {
	fallback: createElement(Loader),
});
export const DashboardFinance = loadable(() => import("./finance/Finance"), {
	fallback: createElement(Loader),
});
