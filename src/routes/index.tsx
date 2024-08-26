import { Navigate, RouteProps } from "react-router-dom";
import {
	Home,
	Profile,
	NotFound,

	Teachers,
	Teacher,

	Groups,
	Group,
	Student,

	Admin,
	Acceptance,
	// Company,

	Finance,
	// FinanceCompanies,
	FinanceDebtors,

	Message,
	Chat,

	DashboardAdmins,
	DashboardGroups,
	DashboardGroup,
	DashboardGroupStudent,
	DashboardCompanies,
	DashboardFinance,
	DashboardRating,

	Holiday,
} from "src/components/screens";
import { TRoleTypes } from "src/services/index.types";
import { useAuthPersistStore } from "src/store";

export const useRoutes = () => {
	const roleName = useAuthPersistStore((state) => state.role);

	const CustomAdmin = roleName === "director" ? DashboardAdmins : Admin;
	const CustomGroups = roleName === "director" ? DashboardGroups : Groups;
	const CustomGroup = roleName === "director" ? DashboardGroup : Group;
	const CustomStudent = roleName === "director" ? DashboardGroupStudent : Student;

	const homeRoute: RouteProps = roleName ? ({
		"admin": {
			path: "/",
			element: <Navigate to={"/groups"} replace={true} />,
		},
		"super_admin": {
			path: "/",
			element: <Navigate to={"/groups"} replace={true} />,
		},
		"director": {
			path: "/",
			element: <DashboardRating />,
		},
	} as Record<TRoleTypes, RouteProps>)[roleName] : {
		path: "/",
		element: <Home />,
	};

	const routes: RouteProps[] = [
		homeRoute,

		{ path: "/admins", element: <CustomAdmin /> },
		{ path: "/admins/:admin_id", element: <CustomAdmin /> },

		{ path: "/companies", element: <DashboardCompanies /> },
		// { path: "/companies/:company_id", element: <Company /> },

		{ path: "/acceptance", element: <Acceptance /> },
		{ path: "/acceptance/:acceptance_id", element: <Acceptance /> },

		{ path: "/teachers", element: <Teachers /> },
		{ path: "/teachers/:teacher_id", element: <Teacher /> },

		{ path: "/groups", element: <CustomGroups /> },
		{ path: "/groups/:group_id", element: <CustomGroup /> },
		{
			path: "/groups/:group_id/students/:student_id",
			element: <CustomStudent />,
		},

		{ path: "/holiday", element: <Holiday /> },

		{
			path: "/finance",
			element: roleName === "director" ? <DashboardFinance /> : <Navigate to={"/finance/profits"} replace={true} />,
		},
		{ path: "/finance/profits", element: <Finance /> },
		{ path: "/finance/debtors", element: <FinanceDebtors /> },

		{ path: "/chat", element: <Message /> },
		{ path: "/chat/:chat_id", element: <Chat /> },

		{ path: "/profile", element: <Profile /> },
		{ path: "/*", element: <NotFound /> },
	];

	const rolesRoutesMap: Omit<Record<TRoleTypes, string[]>, "super_admin"> = {
		admin: [
			"/",

			"/acceptance",
			"/acceptance/:acceptance_id",

			"/teachers",
			"/teachers/:teacher_id",

			"/groups",
			"/groups/:group_id",
			"/groups/:group_id/students/:student_id",

			"/holiday",

			"/finance",
			"/finance/profits",
			"/finance/debtors",

			"/chat",
			"/chat/:chat_id",

			"/profile",
			"/*",
		],
		director: [
			"/",

			"/admins",
			"/admins/:admin_id",

			"/companies",

			"/groups",
			"/groups/:group_id",
			"/groups/:group_id/students/:student_id",

			"/finance",

			"/chat",
			"/chat/:chat_id",

			"/profile",
			"/*",
		],
	};

	const adminRoutes: RouteProps[] = routes.filter((route) => rolesRoutesMap["admin"].includes(route.path as string));
	const directorRoutes: RouteProps[] = routes.filter((route) => rolesRoutesMap["director"].includes(route.path as string));

	if (roleName === "director") return directorRoutes;

	if (roleName === "admin") return adminRoutes;

	return routes;
};
