import { RouteObject } from "react-router-dom"
import { Group } from "src/components/screens/groups"
import { ROUTES } from "src/config"

export const routeGroup: RouteObject = {
	path: `${ROUTES.GROUPS}/:group_id`,
	element: <Group />
}
