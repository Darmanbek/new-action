import React from "react";
import { ConfigProvider, DatePicker } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import locale from "antd/locale/ru_RU";
import dayjs from "dayjs";
import "dayjs/locale/ru";

const { RangePicker } = DatePicker;

dayjs.locale("ru");

export const UiRangePicker = (
	props: React.PropsWithChildren<RangePickerProps>,
) => {
	return (
		<ConfigProvider locale={locale}>
			<RangePicker
				format={{
					format: "YYYY-MM-DD",
					type: "mask",
				}}
				{...props} />
		</ConfigProvider>
	);
};
