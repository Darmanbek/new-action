import loadable from "@loadable/component"
import { createElement } from "react"

import { Loader } from "src/components/shared"

export const Dashboard = loadable(() => import("./dashboard/Dashboard"), {
	fallback: createElement(Loader)
})

export const DashboardFinance = loadable(() => import("./finance/Finance"), {
	fallback: createElement(Loader)
})
