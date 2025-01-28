import { ConfigProvider, Menu, MenuProps, theme } from "antd"
import useSize from "antd/es/config-provider/hooks/useSize"
import { SizeType } from "antd/es/config-provider/SizeContext"

export const UiMenu = (props: MenuProps) => {
	const size = useSize<SizeType>()
	const isLarge = size === "large"

	const {
		token: { colorPrimary, colorPrimaryBg }
	} = theme.useToken()
	return (
		<ConfigProvider
			theme={{
				components: {
					Menu: {
						// itemHoverBg: '#ffe8e8',
						itemHoverBg: "rgba(255, 232, 232, 0.3)",
						itemSelectedColor: colorPrimary,
						subMenuItemBg: "#fff",
						itemColor: "rgba(22, 52, 88, 0.6)",
						controlItemBgActive: colorPrimaryBg,
						groupTitleFontSize: isLarge ? 16 : 14,
						itemHeight: isLarge ? 44 : 40,
						fontSize: isLarge ? 16 : 14,
						iconSize: 18,
						collapsedIconSize: 21
					}
				}
			}}
		>
			<Menu {...props} />
		</ConfigProvider>
	)
}
