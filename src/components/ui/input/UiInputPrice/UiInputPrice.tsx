import { ConfigProvider, InputNumber, InputNumberProps } from "antd"
import { forwardRef } from "react"
import { formatNum } from "src/utils"

export const UiInputPrice = forwardRef<HTMLInputElement, InputNumberProps>((props, ref) => {
	return (
		<ConfigProvider>
			<InputNumber ref={ref} formatter={formatNum} style={{ width: "100%" }} {...props} />
		</ConfigProvider>
	)
})
