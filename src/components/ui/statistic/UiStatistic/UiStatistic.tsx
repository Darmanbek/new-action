import type { StatisticProps } from "antd"
import { ConfigProvider, Statistic } from "antd"
import useSize from "antd/es/config-provider/hooks/useSize"
import { SizeType } from "antd/es/config-provider/SizeContext"
import { FC } from "react"

const UiStatistic: FC<StatisticProps> = (props) => {
	const size = useSize<SizeType>()
	const isLarge = size === "large"

	return (
		<ConfigProvider
			theme={{
				components: {
					Statistic: {
						titleFontSize: isLarge ? 16 : 14,
						contentFontSize: isLarge ? 26 : 24
					}
				}
			}}
		>
			<Statistic {...props} />
		</ConfigProvider>
	)
}

export { UiStatistic }
