import { ConfigProvider, Descriptions, DescriptionsProps } from "antd"
import useSize from "antd/es/config-provider/hooks/useSize"
import { SizeType } from "antd/es/config-provider/SizeContext"
import React from "react"

export const UiDescriptions = (props: React.PropsWithChildren<DescriptionsProps>) => {
	const size = useSize<SizeType>()
	const isLarge = size === "large"

	return (
		<ConfigProvider
			theme={{
				components: {
					Descriptions: {
						labelBg: "#fff"
					}
				}
			}}
		>
			<Descriptions
				labelStyle={{
					fontSize: isLarge ? 16 : 14
					// color: "rgba(0, 0, 0, .88)",
				}}
				contentStyle={{
					fontSize: isLarge ? 16 : 14
					// color: "rgba(0, 0, 0, .88)",
				}}
				{...props}
			/>
		</ConfigProvider>
	)
}
