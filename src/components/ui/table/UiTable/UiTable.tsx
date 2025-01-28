import { ConfigProvider, Table, TableProps, theme } from "antd"
import useSize from "antd/es/config-provider/hooks/useSize"
import { useThemeStore } from "src/store"
import uniqId from "uniqid"

export const UiTable = <T extends object>(props: TableProps<T>) => {
	const size = useSize(props.size)
	const isLarge = size === "large"

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
						fontSize: isLarge ? 16 : token.fontSize
						// rowHoverBg: "#f7f5f5",
					},
					Dropdown: {
						fontSize: isLarge ? 16 : token.fontSize
					}
				}
			}}
		>
			<Table
				className={isDark ? "dark" : "light"}
				rowKey={() => uniqId()}
				style={{
					boxShadow: token.boxShadow,
					borderRadius: token.borderRadiusLG,
					...style
				}}
				scroll={{ x: "auto", ...scroll }}
				pagination={
					pagination ? { position: ["bottomCenter"], size: "default", ...pagination } : false
				}
				{...rest}
			/>
		</ConfigProvider>
	)
}
