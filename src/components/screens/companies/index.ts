import loadable from "@loadable/component"
import { createElement } from "react"

import { Loader } from "src/components/shared"

export const Companies = loadable(() => import("./companies/Companies"), {
	fallback: createElement(Loader)
})
