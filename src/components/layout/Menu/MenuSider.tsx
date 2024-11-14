import Sider from "antd/es/layout/Sider";
import { FC, PropsWithChildren } from "react";
import { Logo1, Logo2Edit } from "src/assets/images";
import { useResponsive } from "src/hooks";
import { useMenuStore } from "src/store";
import clsx from "clsx";
import styles from "./menu.module.scss";

export const MenuSider: FC<PropsWithChildren> = ({ children }) => {
	const { isMobile } = useResponsive(768);
	const collapsed = useMenuStore((state) => state.collapsed);

	if (isMobile) return;

	return (
		<Sider
			collapsed={collapsed}
			className={styles["menu-sider"]}
			width={285}
		>
			<div className={clsx(styles.logo, collapsed && styles.collapse)}>
				<img src={Logo1} style={{display: collapsed ? "block" : "none", flexWrap: "nowrap"}} alt="Menu Logo" />
				<img src={Logo2Edit} style={{display: collapsed ? "none" : "block", flexWrap: "nowrap"}} alt="Menu Logo" />
			</div>
			{children}
		</Sider>
	);
};
