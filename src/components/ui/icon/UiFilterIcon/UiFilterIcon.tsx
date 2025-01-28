import Icon from "@ant-design/icons"
import { IconComponentProps } from "@ant-design/icons/es/components/Icon"
import useSize from "antd/es/config-provider/hooks/useSize"
import { SizeType } from "antd/es/config-provider/SizeContext"
import { FC } from "react"
import { VscSettings } from "react-icons/vsc"

const UiFilterIcon: FC<IconComponentProps> = (props) => {
	const size = useSize<SizeType>()
	const isLarge = size === "large"

	return <Icon component={VscSettings} style={{ fontSize: isLarge ? 21 : 18 }} {...props} />
}

export { UiFilterIcon }
