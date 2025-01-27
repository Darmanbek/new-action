import loadable from "@loadable/component"
import { createElement } from "react"

import { Loader } from "src/components/shared"

export const Acceptances = loadable(() => import("./acceptances/Acceptances"), {
	fallback: createElement(Loader)
})
