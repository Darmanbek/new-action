import React from "react";
import { ConfigProvider, Select, SelectProps } from "antd";
import locale from "antd/locale/ru_RU";
import { useResponsive } from "src/hooks";

interface UiSelectProps {
}

export const UiSelect = (
	props: React.PropsWithChildren<SelectProps & UiSelectProps>
) => {
	const { ...rest } = props;
	const { isMobile } = useResponsive(768);

	return (
		<ConfigProvider
			locale={locale}
			theme={{
				components: {
					Select: {
						optionSelectedColor: "#009746",
						controlItemBgActive: "#E3F2FD",
						optionFontSize: isMobile ? 14 : 16,
						fontSize: isMobile ? 14 : 16,
						fontSizeSM: isMobile ? 14 : 16,
					},
				},
			}}
		>
			<Select {...rest} />
		</ConfigProvider>
	);
};
