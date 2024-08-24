import React from "react";
import { ConfigProvider, Menu, MenuProps, theme } from "antd";
import { useResponsive } from "src/hooks";

export const UiMenu = (props: React.PropsWithChildren<MenuProps>) => {
	const { isMobile } = useResponsive(768);

	const {
		token: { colorPrimary, colorPrimaryBg },
	} = theme.useToken();
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
						groupTitleFontSize: isMobile ? 14 : 16,
						itemHeight: isMobile ? 40 : 44,
						fontSize: isMobile ? 14 : 16,
						iconSize: isMobile ? 14 : 18,
						collapsedIconSize: 18,
					},
				},
			}}
		>
			<Menu {...props} />
		</ConfigProvider>
	);
};
