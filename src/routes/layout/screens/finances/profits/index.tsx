import { RouteObject } from "react-router-dom"
import { Profits } from "src/components/screens/finances"
import { ROUTES } from "src/config"

export const layoutFinancesLayoutProfitsRoute: RouteObject = {
	path: ROUTES.FINANCES.PROFITS,
	element: <Profits />
}
