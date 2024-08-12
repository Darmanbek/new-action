import React from 'react';
import { ConfigProvider, DatePicker, DatePickerProps } from 'antd';
import locale from 'antd/locale/ru_RU';
import dayjs from 'dayjs';

export const UiDatePicker = (
  props: React.PropsWithChildren<DatePickerProps>
) => {
  dayjs.locale('ru_ru');
  return (
    <ConfigProvider locale={locale}>
      <DatePicker style={{ width: '100%' }} {...props} />
    </ConfigProvider>
  );
};
