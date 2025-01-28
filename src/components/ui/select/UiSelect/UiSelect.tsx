import { ConfigProvider, Select, SelectProps } from "antd"
import useSize from "antd/es/config-provider/hooks/useSize"
import { SizeType } from "antd/es/config-provider/SizeContext"
import locale from "antd/locale/ru_RU"
import React from "react"

interface UiSelectProps {}

export const UiSelect = (props: React.PropsWithChildren<SelectProps & UiSelectProps>) => {
	const { ...rest } = props
	const size = useSize<SizeType>(props.size)
	const isLarge = size === "large"

	return (
		<ConfigProvider
			locale={locale}
			theme={{
				components: {
					Select: {
						optionSelectedColor: "#DE070F",
						controlItemBgActive: "#ffe8e8",
						optionFontSize: isLarge ? 16 : 14,
						fontSize: isLarge ? 16 : 14,
						fontSizeSM: isLarge ? 16 : 14
					}
				}
			}}
		>
			<Select {...rest} />
		</ConfigProvider>
	)
}
