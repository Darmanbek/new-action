import { RouteObject } from "react-router-dom"
import { Dashboard } from "src/components/screens/dashboard"
import { ROUTES } from "src/config"

export const layoutDashboard: RouteObject = {
	path: ROUTES.DASHBOARD,
	element: <Dashboard />
}
