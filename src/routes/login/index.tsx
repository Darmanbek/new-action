import { redirect, RouteObject } from "react-router-dom"
import { Login } from "src/components/screens/basic"
import { ROUTES } from "src/config"
import { getToken } from "src/utils/storage"

export const loginRoute: RouteObject = {
	path: ROUTES.LOGIN,
	loader: () => {
		const token = getToken()
		if (token) {
			return redirect(ROUTES.HOME)
		}
		return null
	},
	element: <Login />
}
