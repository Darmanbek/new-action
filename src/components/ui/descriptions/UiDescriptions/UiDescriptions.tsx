import { ConfigProvider, Descriptions, DescriptionsProps } from "antd";
import { FC } from "react";

const UiDescriptions: FC<DescriptionsProps> = (props) => {
	return (
		<ConfigProvider
			theme={{
				components: {
					Descriptions: {
						labelBg: "#fff"
					}
				}
			}}
		>
			<Descriptions {...props}/>
		</ConfigProvider>
	);
};

export { UiDescriptions };
