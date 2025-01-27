import loadable from "@loadable/component"
import { createElement } from "react"

import { Loader } from "src/components/shared"

export const Stories = loadable(() => import("./stories/Stories"), {
	fallback: createElement(Loader)
})
