import React from 'react';
import { ConfigProvider, Select, SelectProps } from 'antd';
import locale from 'antd/locale/ru_RU';

interface UiSelectProps {}

export const UiSelect = (
  props: React.PropsWithChildren<SelectProps & UiSelectProps>
) => {
  const { ...rest } = props;

  return (
    <ConfigProvider
      locale={locale}
      theme={{
        components: {
          Select: {
            // groupTitleColor: '#121926',
            // itemHoverBg: '#E3F2FD',
            // itemSelectedColor: '#009746',
            optionSelectedColor: '#009746',
            // subMenuItemBg: '#fff',
            controlItemBgActive: '#E3F2FD',
            // groupTitleFontSize: 14,
          },
        },
      }}
    >
      <Select {...rest} />
    </ConfigProvider>
  );
};
