import { Outlet, RouteObject } from "react-router-dom"
import { ROUTES } from "src/config"
import { layoutFinancesLayoutDebtorsRoute } from "src/routes/layout/screens/finances/debtors"
import { layoutFinancesLayoutIndexRoute } from "src/routes/layout/screens/finances/index"
import { layoutFinancesLayoutProfitsRoute } from "src/routes/layout/screens/finances/profits"

export const layoutFinancesLayoutRoute: RouteObject = {
	path: ROUTES.FINANCES.ROOT,
	element: <Outlet />,
	children: [
		layoutFinancesLayoutIndexRoute,
		layoutFinancesLayoutProfitsRoute,
		layoutFinancesLayoutDebtorsRoute
	]
}
