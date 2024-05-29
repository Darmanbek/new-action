import { FC } from "react";
import { InputNumber, InputNumberProps } from "antd";
import { formatNum } from "src/utils";

const UiInputPrice: FC<InputNumberProps> = (props) => {
	return (
		<InputNumber 
			formatter={formatNum}
			style={{width: "100%"}}
			{...props}
		/>
	);
};

export { UiInputPrice };
