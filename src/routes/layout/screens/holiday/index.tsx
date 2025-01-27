import { RouteObject } from "react-router-dom"
import { Holiday } from "src/components/screens/holiday"

export const layoutHolidayRoute: RouteObject = {
	path: "/holiday",
	element: <Holiday />
}
