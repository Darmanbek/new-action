import { ConfigProvider, Tag, TagProps } from "antd"
import useSize from "antd/es/config-provider/hooks/useSize"
import { SizeType } from "antd/es/config-provider/SizeContext"
import { FC } from "react"

const UiTag: FC<TagProps> = (props) => {
	const size = useSize<SizeType>()
	const isLarge = size === "large"

	return (
		<ConfigProvider
			theme={{
				components: {
					Tag: {
						fontSize: isLarge ? 14 : 12,
						fontSizeLG: isLarge ? 14 : 12,
						fontSizeSM: isLarge ? 14 : 12
					}
				}
			}}
		>
			<Tag bordered={false} {...props} />
		</ConfigProvider>
	)
}

export { UiTag }
