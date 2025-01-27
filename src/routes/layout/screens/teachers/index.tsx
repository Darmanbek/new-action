import { RouteObject } from "react-router-dom"
import { Teachers } from "src/components/screens/teachers"
import { ROUTES } from "src/config"

export const layoutTeachersRoute: RouteObject = {
	path: ROUTES.TEACHERS,
	element: <Teachers />
}
