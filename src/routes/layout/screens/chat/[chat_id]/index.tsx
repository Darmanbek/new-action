import { RouteObject } from "react-router-dom"
import { Chat } from "src/components/screens/messages"
import { ROUTES } from "src/config"

export const routeChat: RouteObject = {
	path: `${ROUTES.CHAT}/:chat_id`,
	element: <Chat />
}
