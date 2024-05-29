import { FC, ReactNode } from "react";
import { ConfigProvider } from "antd";
import locale from "antd/locale/ru_RU";

const AntdProvider: FC<{ children: ReactNode }> = ({ children }) => (
	<ConfigProvider
		locale={locale}
		theme={{
			token: {
				colorPrimary: "#009746",
				fontFamily: "Roboto, sans-serif",
			},
		}}
	>
		{children}
	</ConfigProvider>
);

export { AntdProvider };
