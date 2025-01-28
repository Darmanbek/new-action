import { Outlet, RouteObject } from "react-router-dom"
import { Messages } from "src/components/screens/messages"
import { ROUTES } from "src/config"
import { routeChat } from "src/routes/layout/screens/chat/[chat_id]"

export const layoutChatRoute: RouteObject = {
	path: ROUTES.CHAT,
	element: <Outlet />,
	children: [
		{
			index: true,
			element: <Messages />
		},
		routeChat
	]
}
