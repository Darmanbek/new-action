import Sider from "antd/es/layout/Sider";
import clsx from "clsx";
import { FC } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { Logo } from "src/components/shared";
import { UiMenu } from "src/components/ui";
import { useResponsive } from 'src/hooks';
import { useMenuStore } from "src/store";
import { useMenuRoutes } from "../menuRoutes";
import styles from "./menu.module.scss";

const MenuSider: FC = () => {
	const { isMobile } = useResponsive(768);
	const collapsed = useMenuStore((state) => state.collapsed);
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const onSelectMenu = (key: string) => {
		navigate(key);
	};

	const routes = useMenuRoutes();

	if (isMobile) return	

	return (
		<Sider
			theme="light"
			collapsed={collapsed}
			style={{ position: "fixed" }}
			className={styles["menu-sider"]}
			width={260}
		>
			<nav className={styles["menu-nav"]}>
				<Logo className={styles.logo} />
				<UiMenu
					theme="light"
					mode="inline"
					defaultSelectedKeys={[pathname]}
					onSelect={(e) => onSelectMenu(e.key)}
					selectedKeys={[pathname]}
					className={clsx(styles.menu, collapsed && styles.active)}
					items={routes}
				/>
			</nav>
		</Sider>
	);
};

export { MenuSider };
