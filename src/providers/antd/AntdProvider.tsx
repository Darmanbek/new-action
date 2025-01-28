import { App, ConfigProvider, theme } from "antd"
import locale from "antd/locale/ru_RU"
import dayjs from "dayjs"
import { FC, PropsWithChildren } from "react"
import { useResponsive } from "src/hooks"
import { useThemeStore } from "src/store"
import "dayjs/locale/ru"

dayjs.locale("ru")

export const AntdProvider: FC<PropsWithChildren> = ({ children }) => {
	const { isMobile } = useResponsive(1400)
	const { isDark } = useThemeStore()

	// const {
	// 	token: { borderRadius },
	// } = theme.useToken();

	return (
		<ConfigProvider
			locale={locale}
			componentSize={isMobile ? "middle" : "large"}
			theme={{
				algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
				token: {
					colorPrimary: "#DE070F",
					fontFamily: "Roboto, sans-serif",
					colorText: "rgba(22, 52, 88, 0.88)",
					boxShadowSecondary: `0 1px 7px -2px rgba(22, 52, 88, 0.06),
0 3px 7px 1px rgba(22, 52, 88, 0.04),
0 1px 4px 2px rgba(22, 52, 88, 0.02)`,
					boxShadow: `0 1px 7px -2px rgba(22, 52, 88, 0.06),
0 3px 7px 1px rgba(22, 52, 88, 0.04),
0 1px 4px 2px rgba(22, 52, 88, 0.02)`
					// borderRadius: isMobile ? borderRadius : 10,
				}
			}}
		>
			<App>{children}</App>
		</ConfigProvider>
	)
}
