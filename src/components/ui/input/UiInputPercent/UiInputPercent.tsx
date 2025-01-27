import { ConfigProvider, InputNumber, InputNumberProps } from "antd"
import { forwardRef } from "react"
import { formatPercent } from "src/utils"

const UiInputPercent = forwardRef<HTMLInputElement, InputNumberProps>((props, ref) => {
	return (
		<ConfigProvider>
			<InputNumber ref={ref} formatter={formatPercent} {...props} />
		</ConfigProvider>
	)
})

export { UiInputPercent }
