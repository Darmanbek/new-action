import { Outlet, RouteObject } from "react-router-dom"
import { Groups } from "src/components/screens/groups"
import { ROUTES } from "src/config"
import { routeGroup } from "src/routes/layout/screens/groups/[group_id]"
import { routeStudent } from "src/routes/layout/screens/groups/[group_id]/students/[student_id]"

export const layoutGroupsRoute: RouteObject = {
	path: ROUTES.GROUPS,
	element: <Outlet />,
	children: [
		{
			index: true,
			element: <Groups />
		},
		routeGroup,
		routeStudent
	]
}
