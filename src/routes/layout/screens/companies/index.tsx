import { RouteObject } from "react-router-dom"
import { Companies } from "src/components/screens/companies"
import { ROUTES } from "src/config"

export const layoutCompaniesRoute: RouteObject = {
	path: ROUTES.COMPANIES,
	element: <Companies />
}
