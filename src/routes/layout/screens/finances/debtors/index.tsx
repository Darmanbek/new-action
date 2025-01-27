import { RouteObject } from "react-router-dom"
import { Debtors } from "src/components/screens/finances"
import { ROUTES } from "src/config"

export const layoutFinancesLayoutDebtorsRoute: RouteObject = {
	path: ROUTES.FINANCES.DEBTORS,
	element: <Debtors />
}
