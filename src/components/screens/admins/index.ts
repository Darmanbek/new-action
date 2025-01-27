import loadable from "@loadable/component"
import { createElement } from "react"

import { Loader } from "src/components/shared"

export const Admins = loadable(() => import("./admins/Admins"), {
	fallback: createElement(Loader)
})
