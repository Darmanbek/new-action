import { ConfigProvider, DatePicker, DatePickerProps } from "antd";
import locale from 'antd/locale/ru_RU';
import dayjs from "dayjs";
import { FC } from "react";

const UiDatePicker: FC<DatePickerProps> = (props) => {
	dayjs.locale("ru_ru");
	return (
		<ConfigProvider locale={locale}>
			<DatePicker style={{width: "100%"}} {...props} />
		</ConfigProvider>
	);
};

export { UiDatePicker };
