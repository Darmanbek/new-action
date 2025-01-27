import { RouteObject } from "react-router-dom"
import { Profile } from "src/components/screens/basic"
import { ROUTES } from "src/config"

export const layoutProfileRoute: RouteObject = {
	path: ROUTES.PROFILE,
	element: <Profile />
}
