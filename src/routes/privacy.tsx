import { RouteObject } from "react-router-dom"
import { Privacy } from "src/components/screens/privacy"
import { ROUTES } from "src/config"

export const privacyRoute: RouteObject = {
	path: ROUTES.PRIVACY,
	element: <Privacy />
}
