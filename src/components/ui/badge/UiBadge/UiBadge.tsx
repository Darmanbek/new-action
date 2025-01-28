import { Badge, BadgeProps, ConfigProvider } from "antd"
import useSize from "antd/es/config-provider/hooks/useSize"
import { SizeType } from "antd/es/config-provider/SizeContext"
import { FC } from "react"

const UiBadge: FC<BadgeProps> = (props) => {
	const size = useSize<SizeType>()
	const isLarge = size === "large"

	return (
		<ConfigProvider
			theme={{
				components: {
					Badge: {
						statusSize: isLarge ? 12 : 10,
						fontSize: isLarge ? 16 : 14
					}
				}
			}}
		>
			<Badge {...props} />
		</ConfigProvider>
	)
}

export { UiBadge }
