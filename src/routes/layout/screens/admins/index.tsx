import { RouteObject } from "react-router-dom"
import { Admins } from "src/components/screens/admins"
import { ROUTES } from "src/config"

export const layoutAdminsRoute: RouteObject = {
	path: ROUTES.ADMINS,
	element: <Admins />
}
