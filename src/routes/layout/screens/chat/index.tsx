import { RouteObject } from "react-router-dom"
import { Messages } from "src/components/screens/messages"
import { ROUTES } from "src/config"

export const layoutChatRoute: RouteObject = {
	path: ROUTES.CHAT,
	element: <Messages />
}
