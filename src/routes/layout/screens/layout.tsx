import { Outlet, RouteObject } from "react-router-dom"
import { ROUTES } from "src/config"
import { layoutIndexRoute } from "src/routes/layout"
import { LayoutError } from "src/routes/layout/error"
import { layoutAcceptancesRoute } from "src/routes/layout/screens/acceptances"
import { layoutAdminsRoute } from "src/routes/layout/screens/admins"
import { layoutChatRoute } from "src/routes/layout/screens/chat"
import { layoutCompaniesRoute } from "src/routes/layout/screens/companies"
import { layoutDashboard } from "src/routes/layout/screens/dashboard"
import { layoutFinancesLayoutRoute } from "src/routes/layout/screens/finances/layout"
import { layoutGroupsRoute } from "src/routes/layout/screens/groups"
import { layoutHolidayRoute } from "src/routes/layout/screens/holiday"
import { layoutProfileRoute } from "src/routes/layout/screens/profile"
import { layoutStoriesRoute } from "src/routes/layout/screens/stories"
import { layoutStudentsRoute } from "src/routes/layout/screens/students"
import { layoutTeachersRoute } from "src/routes/layout/screens/teachers"

export const layoutScreensRoute: RouteObject = {
	path: ROUTES.ROOT,
	element: <Outlet />,
	errorElement: <LayoutError />,
	children: [
		layoutIndexRoute,
		layoutProfileRoute,
		layoutDashboard,
		layoutAdminsRoute,
		layoutTeachersRoute,
		layoutGroupsRoute,
		layoutCompaniesRoute,
		layoutAcceptancesRoute,
		layoutStudentsRoute,
		layoutHolidayRoute,
		layoutStoriesRoute,
		layoutFinancesLayoutRoute,
		layoutChatRoute
	]
}
