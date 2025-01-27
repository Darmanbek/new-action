import { RouteObject } from "react-router-dom"
import { Layout } from "src/components/layout"
import { ROUTES } from "src/config"
import { RootError } from "src/routes/error"
import { layoutScreensRoute } from "./screens/layout"

export const layoutRoute: RouteObject = {
	path: ROUTES.ROOT,
	element: <Layout />,
	errorElement: <RootError />,
	children: [layoutScreensRoute]
}
