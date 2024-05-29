import { FC } from "react";
import { ConfigProvider, Button, ButtonProps } from "antd";

interface UiButtonProps {
	color?: string;
	borderRadius?: number;
}

const UiButton: FC<UiButtonProps & ButtonProps> = (props) => {

	const { borderRadius, color, ...rest } = props;

	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: color || "#009746",
				},
				components: {
					Button: {
						borderRadius: borderRadius || 6,
						borderRadiusLG: borderRadius || 8,
						borderRadiusSM: borderRadius || 4,
					}
				}
			}}
		>
			<Button {...rest}/>
		</ConfigProvider>
	);
};

export { UiButton };
