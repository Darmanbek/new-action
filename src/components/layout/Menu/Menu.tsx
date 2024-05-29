import { FC } from "react";
import { MenuSider } from "./MenuSider";
import { MenuDrawer } from './MenuDrawer';

const Menu: FC = () => {
	return (
		<>
			<MenuSider />
			<MenuDrawer />
		</>
	);
};

export { Menu };
