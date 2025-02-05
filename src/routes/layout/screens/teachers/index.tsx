import { Outlet, RouteObject } from "react-router-dom"
import { Teachers } from "src/components/screens/teachers"
import { ROUTES } from "src/config"
import { routeTeacher } from "./[teacher_id]"

export const layoutTeachersRoute: RouteObject = {
	path: ROUTES.TEACHERS,
	element: <Outlet />,
	children: [
		{
			index: true,
			element: <Teachers />
		},
		routeTeacher
	]
}
