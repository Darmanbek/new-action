import { useResponsive } from "src/hooks"
import { MenuDrawer } from "./MenuDrawer"
import { MenuList } from "./MenuList"
import { MenuSider } from "./MenuSider"

export const Menu = () => {
	const { isMobile } = useResponsive(768)

	if (isMobile)
		return (
			<MenuDrawer>
				<MenuList />
			</MenuDrawer>
		)

	return (
		<MenuSider>
			<MenuList />
		</MenuSider>
	)
}
