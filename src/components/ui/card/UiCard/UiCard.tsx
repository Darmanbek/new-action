import { Card, CardProps, ConfigProvider, theme } from "antd"
import useSize from "antd/es/config-provider/hooks/useSize"
import { SizeType } from "antd/es/config-provider/SizeContext"
import { FC } from "react"

const UiCard: FC<CardProps> = (props) => {
	const { style, styles, ...rest } = props
	const size = useSize<SizeType>()
	const isLarge = size === "large"

	const { token } = theme.useToken()
	return (
		<ConfigProvider>
			<Card
				style={{
					boxShadow: token.boxShadow,
					...style
				}}
				styles={{
					title: {
						fontWeight: 500,
						fontSize: isLarge ? 20 : 18
					},
					...styles
				}}
				{...rest}
			/>
		</ConfigProvider>
	)
}

export { UiCard }
