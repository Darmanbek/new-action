import { ConfigProvider, Select, SelectProps } from "antd"
import locale from "antd/locale/ru_RU"
import React from "react"
import { useResponsive } from "src/hooks"

interface UiSelectProps {}

export const UiSelect = (props: React.PropsWithChildren<SelectProps & UiSelectProps>) => {
	const { ...rest } = props
	const { isMobile } = useResponsive(768)

	return (
		<ConfigProvider
			locale={locale}
			theme={{
				components: {
					Select: {
						optionSelectedColor: "#DE070F",
						controlItemBgActive: "#ffe8e8",
						optionFontSize: isMobile ? 14 : 16,
						fontSize: isMobile ? 14 : 16,
						fontSizeSM: isMobile ? 14 : 16
					}
				}
			}}
		>
			<Select {...rest} />
		</ConfigProvider>
	)
}
