import { RouteObject } from "react-router-dom"
import { Groups } from "src/components/screens/groups"
import { ROUTES } from "src/config"

export const layoutGroupsRoute: RouteObject = {
	path: ROUTES.GROUPS,
	element: <Groups />
}
