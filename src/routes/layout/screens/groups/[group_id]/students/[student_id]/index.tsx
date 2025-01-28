import { RouteObject } from "react-router-dom"
import { Student } from "src/components/screens/groups"
import { ROUTES } from "src/config"

export const routeStudent: RouteObject = {
	path: `${ROUTES.GROUPS}/:group_id/students/:student_id`,
	element: <Student />
}
