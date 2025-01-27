import { RouteObject } from "react-router-dom"
import { Stories } from "src/components/screens/stories"
import { ROUTES } from "src/config"

export const layoutStoriesRoute: RouteObject = {
	path: ROUTES.STORIES,
	element: <Stories />
}
