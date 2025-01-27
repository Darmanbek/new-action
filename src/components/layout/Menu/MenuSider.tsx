import Sider from "antd/es/layout/Sider"
import clsx from "clsx"
import { FC, PropsWithChildren } from "react"
import { Logo1, Logo2Edit } from "src/assets/images"
import { useMenuStore } from "src/store"
import styles from "./menu.module.scss"

export const MenuSider: FC<PropsWithChildren> = ({ children }) => {
	const collapsed = useMenuStore((state) => state.collapsed)

	return (
		<Sider collapsed={collapsed} className={styles["menu-sider"]} width={285}>
			<div className={clsx(styles.logo, collapsed && styles.collapse)}>
				<img
					src={Logo1}
					style={{ display: collapsed ? "block" : "none", flexWrap: "nowrap" }}
					alt={"Menu Logo"}
				/>
				<img
					src={Logo2Edit}
					style={{ display: collapsed ? "none" : "block", flexWrap: "nowrap" }}
					alt={"Menu Logo"}
				/>
			</div>
			{children}
		</Sider>
	)
}
