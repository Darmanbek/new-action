import { RouteObject } from "react-router-dom"
import { Students } from "src/components/screens/students"
import { ROUTES } from "src/config"

export const layoutStudentsRoute: RouteObject = {
	path: ROUTES.STUDENTS,
	element: <Students />
}
