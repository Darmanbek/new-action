import { ConfigProvider, InputNumber, InputNumberProps } from "antd";
import { FC } from "react";
import { formatMonth } from "src/utils";

const UiInputMonth: FC<InputNumberProps> = (props) => {
	return (
		<ConfigProvider>
			<InputNumber formatter={formatMonth} style={{ width: "100%" }} {...props} />
		</ConfigProvider>
	);
};

export { UiInputMonth };
