import clsx from "clsx";
import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Logo } from "src/components/shared";
import { UiDrawer, UiMenu } from "src/components/ui";
import { useMenuStore } from "src/store";
import { useMenuRoutes } from "../menuRoutes";
import styles from "./menu.module.scss";

const MenuDrawer: FC = () => {
	const open = useMenuStore((state) => state.open);
	const toggleOpen = useMenuStore((state) => state.toggleOpen);
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const onSelectMenu = (key: string) => {
		toggleOpen();
		navigate(key);
	};

	const routes = useMenuRoutes();
	return (
		<UiDrawer
			open={open}
			onClose={toggleOpen}
			placement="left"
			padding={0}
			className={styles["menu-drawer"]}
			width={260}
			closable={false}
			title={<Logo className={styles.logo} />}
		>
			<nav className={styles["menu-nav"]}>
				<UiMenu
					theme="light"
					mode="inline"
					defaultSelectedKeys={[pathname]}
					onSelect={(e) => onSelectMenu(e.key)}
					selectedKeys={[pathname]}
					className={clsx(styles.menu)}
					items={routes}
				/>
			</nav>
		</UiDrawer>
	);
};

export { MenuDrawer };
