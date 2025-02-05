import { RouteObject } from "react-router-dom"
import { Teacher } from "src/components/screens/teachers"
import { ROUTES } from "src/config"

export const routeTeacher: RouteObject = {
	path: `${ROUTES.TEACHERS}/:teacher_id`,
	element: <Teacher />
}
