import { Button, ButtonProps, ConfigProvider } from "antd";
import { FC } from "react";


const UiSettingsButton: FC<ButtonProps> = (props) => {

	return (
		<ConfigProvider
			theme={{
				token: {
					controlHeight: 40,
				}
			}}
		>
			<Button
				{...props}
			/>
		</ConfigProvider>
	);
};

export { UiSettingsButton };
