import React from "react";
import { ConfigProvider, Descriptions, DescriptionsProps } from "antd";
import { useResponsive } from "src/hooks";

export const UiDescriptions = (
	props: React.PropsWithChildren<DescriptionsProps>
) => {
	const { isMobile } = useResponsive(768);

	return (
		<ConfigProvider
			theme={{
				components: {
					Descriptions: {
						labelBg: "#fff",
					},
				},
			}}
		>
			<Descriptions
				labelStyle={{
					fontSize: isMobile ? 14 : 16,
					// color: "rgba(0, 0, 0, .88)",
				}}
				contentStyle={{
					fontSize: isMobile ? 14 : 16,
					// color: "rgba(0, 0, 0, .88)",
				}}
				{...props}
			/>
		</ConfigProvider>
	);
};
