import loadable from "@loadable/component"
import { createElement } from "react"

import { Loader } from "src/components/shared"

export const Students = loadable(() => import("./students/Students"), {
	fallback: createElement(Loader)
})
