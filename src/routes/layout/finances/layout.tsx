import { Outlet, RouteObject } from "react-router-dom";
import { ROUTES } from "src/config";
import {
	layoutFinancesLayoutDebtorsRoute
} from "src/routes/layout/finances/debtors";
import {
	layoutFinancesLayoutIndexRoute
} from "src/routes/layout/finances/index";
import {
	layoutFinancesLayoutProfitsRoute
} from "src/routes/layout/finances/profits";

export const layoutFinancesLayoutRoute: RouteObject = {
	path: ROUTES.FINANCES.ROOT,
	element: <FinancesLayout />,
	children: [
		layoutFinancesLayoutIndexRoute,
		layoutFinancesLayoutProfitsRoute,
		layoutFinancesLayoutDebtorsRoute,
	]
};

// eslint-disable-next-line react-refresh/only-export-components
function FinancesLayout() {
	return (
		<>
			<Outlet />
		</>
	);
}
