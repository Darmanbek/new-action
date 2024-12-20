import { useEffect } from "react";
import { Outlet, RouteObject, useNavigate } from "react-router-dom";
import {
	Header,
	InnerLayout,
	Main,
	MainLayout,
	Menu
} from "src/components/layout";
import { ROUTES } from "src/config";
import { RootError } from "src/routes/error";
import { LayoutError } from "src/routes/layout/error";
import { layoutAcceptancesRoute } from "src/routes/layout/acceptances";
import { layoutAdminsRoute } from "src/routes/layout/admins";
import { layoutChatRoute } from "src/routes/layout/chat";
import { layoutCompaniesRoute } from "src/routes/layout/companies";
import { layoutDashboard } from "src/routes/layout/dashboard";
import { layoutFinancesLayoutRoute } from "src/routes/layout/finances/layout";
import { layoutGroupsRoute } from "src/routes/layout/groups";
import { layoutHolidayRoute } from "src/routes/layout/holiday";
import { layoutIndexRoute } from "src/routes/layout/index";
import { layoutStoriesRoute } from "src/routes/layout/stories";
import { layoutTeachersRoute } from "src/routes/layout/teachers";
import { useAuthPersistStore } from "src/store";
import { useGetMeQuery } from "src/services/index.api";

export const layoutRoute: RouteObject = {
	path: ROUTES.ROOT,
	element: <Layout />,
	errorElement: <RootError />,
	children: [
		layoutIndexRoute,
		layoutDashboard,
		layoutAdminsRoute,
		layoutTeachersRoute,
		layoutGroupsRoute,
		layoutCompaniesRoute,
		layoutAcceptancesRoute,
		layoutHolidayRoute,
		layoutStoriesRoute,
		layoutFinancesLayoutRoute,
		layoutChatRoute
	].map(route => ({
		...route,
		errorElement: <LayoutError />,
	}))
};

// eslint-disable-next-line react-refresh/only-export-components
function Layout() {
	const { error } = useGetMeQuery();
	const token = useAuthPersistStore(state => state.token);
	const navigate = useNavigate();
	
	useEffect(() => {
		if (error || !token) {
			navigate(ROUTES.LOGIN, {
				replace: true
			});
		}
	}, [error, navigate, token]);
	return (
		<MainLayout>
			<Menu />
			<InnerLayout>
				<Header />
				<Main>
					<Outlet />
				</Main>
			</InnerLayout>
		</MainLayout>
	);
}
