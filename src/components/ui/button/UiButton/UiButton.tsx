import React from "react";
import { ConfigProvider, Button, ButtonProps, theme } from "antd";

interface UiButtonProps {
	color?: string;
	colorText?: string;
}

export const UiButton = (
	props: React.PropsWithChildren<UiButtonProps & ButtonProps>
) => {
	const { color, colorText, ...rest } = props;

	const {
		token
	} = theme.useToken();

	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: color || token.colorPrimary,
					colorText: colorText || token.colorText
				},
			}}
		>
			<Button {...rest} />
		</ConfigProvider>
	);
};
