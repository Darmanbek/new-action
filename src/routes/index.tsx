import { RouteProps } from "react-router-dom";
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
	Company,

	FinanceProfits,
	FinanceDebtors,

	Message,
	Chat,
} from "src/components/screens";
import { TRoleTypes } from "src/services/index.types";
import { useAuthPersistStore } from "src/store";

export const useRoutes = () => {
	const roleName = useAuthPersistStore((state) => state.role);

	const routes: RouteProps[] = [
		{ path: "/", element: <Home /> },

		{ path: "/admins", element: <Admin /> },
		{ path: "/admins/:admin_id", element: <Admin /> },

		{ path: "/companies", element: <Company /> },
		{ path: "/companies/:company_id", element: <Company /> },

		{ path: "/acceptance", element: <Acceptance /> },
		{ path: "/acceptance/:acceptance_id", element: <Acceptance /> },

		{ path: "/teachers", element: <Teachers /> },
		{ path: "/teachers/:teacher_id", element: <Teacher /> },

		{ path: "/groups", element: <Groups /> },
		{ path: "/groups/:group_id", element: <Group /> },
		{
			path: "/groups/:group_id/students/:student_id",
			element: <Student />,
		},

		// { path: "/holiday", element: <Holiday /> },

		{ path: "/finance", element: <Home /> },
		{ path: "/finance/profits/:group_id", element: <FinanceProfits /> },
		{ path: "/finance/debtors/:group_id", element: <FinanceDebtors /> },

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
			"/groups/:group_id/lessons",
			"/groups/:group_id/students",
			"/groups/:group_id/students/:student_id/payments",

			"/finance",
			"/finance/profits/:group_id",
			"/finance/debtors/:group_id",

			"/chat",
			"/chat/:chat_id",

			"/profile",
			"/*",
		],
		director: [
			"/",

			"/admins",
			"/admins/:admin_id",

			"/teachers",
			"/teachers/:teacher_id",

			"/groups",
			"/groups/:group_id",
			"/groups/:group_id/lessons",
			"/groups/:group_id/students",
			"/groups/:group_id/students/:student_id/payments",

			"/finance",
			"/finance/profits/:group_id",
			"/finance/debtors/:group_id",

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
