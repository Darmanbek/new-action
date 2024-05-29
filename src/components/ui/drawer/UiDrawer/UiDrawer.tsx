import { ConfigProvider, Drawer, DrawerProps } from "antd";
import { FC } from "react";

interface UiDrawer {
	padding?: number;
}

const UiDrawer: FC<UiDrawer & DrawerProps> = (props) => {
	const { padding, ...rest } = props;

	return (
		<ConfigProvider
			theme={{
				components: {
					Drawer: {
						padding: padding !== undefined ? padding : 16,
						paddingLG: padding !== undefined ? padding : 24,
						paddingXS: padding !== undefined ? padding : 8,
					},
				},
			}}
		>
			<Drawer {...rest} />
		</ConfigProvider>
	);
};

export { UiDrawer };
