import loadable from "@loadable/component"
import { createElement } from "react"

import { Loader } from "src/components/shared"

export const Groups = loadable(() => import("./groups/Groups"), {
	fallback: createElement(Loader)
})

export const Group = loadable(() => import("./group/Group"), {
	fallback: createElement(Loader)
})

export const Student = loadable(() => import("./student/Student"), {
	fallback: createElement(Loader)
})
