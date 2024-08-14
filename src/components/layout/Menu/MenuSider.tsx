import Sider from "antd/es/layout/Sider";
import { useLocation, useNavigate } from "react-router-dom";
import { Logo1, Logo2Edit } from "src/assets/images";
import { UiMenu } from "src/components/ui";
import { useResponsive } from "src/hooks";
import { useMenuStore } from "src/store";
import { useMenuRoutes } from "../menu.routes";
import clsx from "clsx";
import styles from "./menu.module.scss";

export const MenuSider = () => {
	const { isMobile } = useResponsive(768);
	const collapsed = useMenuStore((state) => state.collapsed);
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const routes = useMenuRoutes();
	const onSelectMenu = (key: string) => navigate(key);

	const MenuLogo = collapsed ? <img src={Logo1} alt="Menu Logo" /> : <img src={Logo2Edit} alt="Menu Logo" />;

	if (isMobile) return;

	return (
		<Sider
			theme="light"
			collapsed={collapsed}
			className={styles["menu-sider"]}
			width={260}
		>
			<nav className={styles["menu-nav"]}>
				<div className={clsx(styles.logo, collapsed && styles.collapse)}>
					{MenuLogo}
				</div>
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
