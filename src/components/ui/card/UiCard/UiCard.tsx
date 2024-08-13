import { ConfigProvider, Card, CardProps } from "antd";
import { FC } from "react";

const UiCard: FC<CardProps> = (props) => {
	return (
		<ConfigProvider>
			<Card style={{
				boxShadow: "0px 2px 14px 2px rgba(229, 229, 229, .33)"
			}} {...props} />
		</ConfigProvider>
	);
};

export { UiCard };