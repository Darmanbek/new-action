import { ConfigProvider, Card, CardProps, theme } from "antd";
import { FC } from "react";

const UiCard: FC<CardProps> = (props) => {
	const { style, ...rest } = props;
	const { token } = theme.useToken();
	return (
		<ConfigProvider>
			<Card
				style={{
					boxShadow: token.boxShadow,
					...style
				}}
				styles={{
					title: {
						fontWeight: 500,
						fontSize: 20,
					}
				}}
				{...rest}
			/>
		</ConfigProvider>
	);
};

export { UiCard };
