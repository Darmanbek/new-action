import { RouteObject } from "react-router-dom"
import { Acceptances } from "src/components/screens/acceptances"
import { ROUTES } from "src/config"

export const layoutAcceptancesRoute: RouteObject = {
	path: ROUTES.ACCEPTANCES,
	element: <Acceptances />
}
