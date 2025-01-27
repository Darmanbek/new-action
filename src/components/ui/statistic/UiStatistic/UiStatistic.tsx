import type { StatisticProps } from "antd"
import { ConfigProvider, Statistic } from "antd"
import { FC } from "react"
import { useResponsive } from "src/hooks"

const UiStatistic: FC<StatisticProps> = (props) => {
	const { isMobile } = useResponsive(768)

	return (
		<ConfigProvider
			theme={{
				components: {
					Statistic: {
						titleFontSize: isMobile ? 14 : 16,
						contentFontSize: isMobile ? 24 : 26
					}
				}
			}}
		>
			<Statistic {...props} />
		</ConfigProvider>
	)
}

export { UiStatistic }
