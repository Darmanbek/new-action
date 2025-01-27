import loadable from "@loadable/component"
import { createElement } from "react"

import { Loader } from "src/components/shared"

export const Dashboard = loadable(() => import("./dashboard/Dashboard"), {
	fallback: createElement(Loader)
})

export const DashboardCompany = loadable(() => import("./company/Company"), {
	fallback: createElement(Loader)
})

export const DashboardAdmins = loadable(() => import("./admins/Admins"), {
	fallback: createElement(Loader)
})

export const DashboardGroups = loadable(() => import("./group/groups/Groups"), {
	fallback: createElement(Loader)
})
export const DashboardGroup = loadable(() => import("./group/group/Group"), {
	fallback: createElement(Loader)
})
export const DashboardGroupStudent = loadable(() => import("./group/student/Student"), {
	fallback: createElement(Loader)
})
export const DashboardFinance = loadable(() => import("./finance/Finance"), {
	fallback: createElement(Loader)
})

export const DashboardStory = loadable(() => import("./story/Story"), {
	fallback: createElement(Loader)
})
