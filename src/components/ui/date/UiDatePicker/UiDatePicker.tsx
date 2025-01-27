import { ConfigProvider, DatePicker, DatePickerProps } from "antd"
import locale from "antd/locale/ru_RU"
import "dayjs/locale/ru"

import dayjs from "dayjs"
import React from "react"

dayjs.locale("ru")

export const UiDatePicker = (props: React.PropsWithChildren<DatePickerProps>) => {
	return (
		<ConfigProvider locale={locale}>
			<DatePicker style={{ width: "100%" }} {...props} />
		</ConfigProvider>
	)
}
