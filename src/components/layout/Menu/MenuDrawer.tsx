import clsx from "clsx";
import { useLocation, useNavigate } from "react-router-dom";
import { Logo2Edit } from "src/assets/images";
import { UiDrawer, UiMenu } from "src/components/ui";
import { useMenuStore } from "src/store";
import { useMenuRoutes } from "../menu.routes";
import styles from "./menu.module.scss";

export const MenuDrawer = () => {
	const open = useMenuStore((state) => state.open);
	const toggleOpen = useMenuStore((state) => state.toggleOpen);
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const routes = useMenuRoutes();

	const onSelectMenu = (key: string) => {
		toggleOpen();
		navigate(key);
	};

	return (
		<UiDrawer
			open={open}
			onClose={toggleOpen}
			placement="left"
			padding={0}
			className={styles["menu-drawer"]}
			width={260}
			closable={false}
			title={
				<div className={styles.logo}>
					<img src={Logo2Edit} alt="Logo" />
				</div>
			}
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
