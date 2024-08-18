import { MenuList } from "./MenuList";
import { useResponsive } from "src/hooks";
import { MenuSider } from "./MenuSider";
import { MenuDrawer } from "./MenuDrawer";

export const Menu = () => {
	const { isMobile } = useResponsive(768);

	if (isMobile) return (
		<MenuDrawer>
			<MenuList />
		</MenuDrawer>
	);

	return (
		<MenuSider>
			<MenuList />
		</MenuSider>
	);
};
