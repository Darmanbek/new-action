import { ConfigProvider, Drawer, DrawerProps } from "antd"
import React from "react"

interface UiDrawer {
	padding?: number
}

export const UiDrawer = (props: React.PropsWithChildren<UiDrawer & DrawerProps>) => {
	const { padding, ...rest } = props

	return (
		<ConfigProvider
			theme={{
				components: {
					Drawer: {
						padding: padding !== undefined ? padding : 16,
						paddingLG: padding !== undefined ? padding : 24,
						paddingXS: padding !== undefined ? padding : 8
					}
				}
			}}
		>
			<Drawer {...rest} />
		</ConfigProvider>
	)
}
