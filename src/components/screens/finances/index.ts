import loadable from "@loadable/component"
import { createElement } from "react"

import { Loader } from "src/components/shared"

export const Finances = loadable(() => import("./finances/Finances"), {
	fallback: createElement(Loader)
})
export const Debtors = loadable(() => import("./debtors/Debtors"), {
	fallback: createElement(Loader)
})
export const Profits = loadable(() => import("./profits/Profits"), {
	fallback: createElement(Loader)
})
