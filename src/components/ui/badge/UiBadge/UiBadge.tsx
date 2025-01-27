import { Badge, BadgeProps, ConfigProvider } from "antd"
import { FC } from "react"
import { useResponsive } from "src/hooks"

const UiBadge: FC<BadgeProps> = (props) => {
	const { isMobile } = useResponsive(768)

	return (
		<ConfigProvider
			theme={{
				components: {
					Badge: {
						statusSize: isMobile ? 6 : 12,
						fontSize: isMobile ? 14 : 16
					}
				}
			}}
		>
			<Badge {...props} />
		</ConfigProvider>
	)
}

export { UiBadge }
