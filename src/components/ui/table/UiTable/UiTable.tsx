import { ConfigProvider, Table, TableProps, theme } from "antd"
import { useResponsive } from "src/hooks"
import { useThemeStore } from "src/store"
import uniqid from "uniqid"

export const UiTable = <T extends object>(props: TableProps<T>) => {
	const { isMobile } = useResponsive(768)
	const { isDark } = useThemeStore()
	const { style, scroll, pagination, ...rest } = props

	const { token } = theme.useToken()

	return (
		<ConfigProvider
			theme={{
				components: {
					Table: {
						headerBg: token.colorBgContainer,
						footerBg: token.colorBgContainer,
						rowExpandedBg: token.colorBgContainer,
						fontSize: isMobile ? 14 : 16
						// rowHoverBg: "#f7f5f5",
					},
					Dropdown: {
						fontSize: isMobile ? 14 : 16
					}
				}
			}}
		>
			<Table
				className={isDark ? "dark" : "light"}
				rowKey={() => uniqid()}
				style={{
					boxShadow: token.boxShadow,
					borderRadius: token.borderRadiusLG,
					...style
				}}
				scroll={{ x: "auto", ...scroll }}
				pagination={
					pagination !== false ? { position: ["bottomCenter"], ...pagination } : pagination
				}
				{...rest}
			/>
		</ConfigProvider>
	)
}
