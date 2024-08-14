import { ConfigProvider, Tag, TagProps } from "antd";
import { FC } from "react";
import { useResponsive } from "src/hooks";

const UiTag: FC<TagProps> = (props) => {
	const { isMobile } = useResponsive(768);

	return (
		<ConfigProvider
			theme={{
				components: {
					Tag: {
						fontSize: isMobile ? 12 : 14,
						fontSizeLG: isMobile ? 12 : 14,
						fontSizeSM: isMobile ? 12 : 14
					}
				}
			}}
		>
			<Tag {...props} />
		</ConfigProvider>
	);
};

export { UiTag };