import { Typography } from "antd"
import clsx from "clsx"
import { FC } from "react"
import { MdOutlinePrivacyTip } from "react-icons/md"
import { useLocation, useNavigate } from "react-router-dom"
import { useMenuRoutes } from "src/components/layout/menu.routes"
import { UiMenu } from "src/components/ui"
import { useResponsive } from "src/hooks"
import { useMenuStore } from "src/store"
import styles from "./menu.module.scss"

const MenuList: FC = () => {
	const { isMobile } = useResponsive(768)
	const collapsed = useMenuStore((state) => state.collapsed)
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const routes = useMenuRoutes()
	const onSelectMenu = (key: string) => navigate(key)

	return (
		<nav className={clsx(styles["menu-nav"], collapsed && !isMobile && styles.active)}>
			<UiMenu
				mode={"inline"}
				defaultSelectedKeys={[pathname]}
				onSelect={(e) => onSelectMenu(e.key)}
				selectedKeys={[pathname]}
				items={routes}
				style={{
					flexGrow: 1
				}}
				className={styles.menu}
			/>

			<UiMenu
				mode={"inline"}
				defaultSelectedKeys={[pathname]}
				onSelect={(e) => onSelectMenu(e.key)}
				selectedKeys={[pathname]}
				items={[
					{
						key: "/privacy",
						icon: <MdOutlinePrivacyTip />,
						label: (
							<Typography.Link style={{ fontSize: 12 }}>
								Политика конфиденциальности
							</Typography.Link>
						)
						// style: {
						// 	fontSize: 10
						// }
					}
				]}
				className={styles.menu}
			/>
		</nav>
	)
}

export { MenuList }
