import { FC } from "react";
import { InputNumber, InputNumberProps } from "antd";
import { formatPercent } from "src/utils";

const UiInputPercent: FC<InputNumberProps> = (props) => {
	return (
		<InputNumber 
			formatter={formatPercent}
			{...props}
		/>
	);
};

export { UiInputPercent };
