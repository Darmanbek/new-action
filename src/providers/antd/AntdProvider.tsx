import { FC, PropsWithChildren } from "react";
import { ConfigProvider, theme } from "antd";
import locale from "antd/locale/ru_RU";
import { useResponsive } from "src/hooks";

export const AntdProvider: FC<PropsWithChildren> = ({ children }) => {
	const { isMobile } = useResponsive(768);

	const {
		token: { borderRadius },
	} = theme.useToken();

	return (
		<ConfigProvider
			locale={locale}
			componentSize={isMobile ? "middle" : "large"}
			theme={{
				token: {
					colorPrimary: "#980000",
					fontFamily: "Roboto, sans-serif",
					borderRadius: isMobile ? borderRadius : 10,
				},
			}}
		>
			{children}
		</ConfigProvider>
	);
};
