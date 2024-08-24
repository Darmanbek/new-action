import React from "react";
import { ConfigProvider, Button, ButtonProps, theme, Tooltip } from "antd";
import { useResponsive } from "src/hooks";

interface UiButtonProps {
	color?: string;
	colorText?: string;
	title: string;
	showTitle?: boolean;
	showContent?: boolean;
}

export const UiTooltipButton = (
	props: React.PropsWithChildren<UiButtonProps & ButtonProps>,
) => {
	const {
		color,
		colorText,
		title,
		showTitle,
		showContent,
		children,
		...rest
	} = props;
	const { isMobile } = useResponsive(768);

	const {
		token,
	} = theme.useToken();

	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: color || token.colorPrimary,
					colorText: colorText || token.colorText,
				},
			}}
		>
			<Tooltip title={(isMobile || showTitle) ? title : ""}>
				<Button {...rest} children={(!isMobile || showContent) && children} />
			</Tooltip>
		</ConfigProvider>
	);
};
