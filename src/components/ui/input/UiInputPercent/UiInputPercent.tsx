import { FC } from "react";
import { ConfigProvider, InputNumber, InputNumberProps } from "antd";
import { formatPercent } from "src/utils";

const UiInputPercent: FC<InputNumberProps> = (props) => {
	return (
		<ConfigProvider>
			<InputNumber formatter={formatPercent} {...props} />
		</ConfigProvider>
	);
};

export { UiInputPercent };
