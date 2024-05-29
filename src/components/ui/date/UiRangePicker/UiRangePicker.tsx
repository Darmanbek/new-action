import { ConfigProvider, DatePicker } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import locale from "antd/locale/ru_RU";
import dayjs from "dayjs";
import { FC } from "react";

const { RangePicker } = DatePicker;

const UiRangePicker: FC<RangePickerProps> = (props) => {
	dayjs.locale("ru_ru");
	return (
		<ConfigProvider locale={locale}>
			<RangePicker {...props} />
		</ConfigProvider>
	);
};

export { UiRangePicker };
