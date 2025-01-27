import { Button, ButtonProps, ConfigProvider, theme } from "antd"
import React from "react"

interface UiButtonProps {
	color?: string
	colorText?: string
}

export const UiButton = (props: React.PropsWithChildren<UiButtonProps & ButtonProps>) => {
	const { color, colorText, ...rest } = props

	const { token } = theme.useToken()

	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: color || token.colorPrimary,
					colorText: colorText || token.colorText
				}
			}}
		>
			<Button {...rest} />
		</ConfigProvider>
	)
}
