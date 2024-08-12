import React from 'react';
import { ConfigProvider, DatePicker } from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';
import locale from 'antd/locale/ru_RU';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;

export const UiRangePicker = (
  props: React.PropsWithChildren<RangePickerProps>
) => {
  dayjs.locale('ru_ru');
  return (
    <ConfigProvider locale={locale}>
      <RangePicker {...props} />
    </ConfigProvider>
  );
};
