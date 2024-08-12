import React from 'react';
import { ConfigProvider, Menu, MenuProps, theme } from 'antd';
import { useResponsive } from 'src/hooks';

export const UiMenu = (props: React.PropsWithChildren<MenuProps>) => {
  const { isMobile } = useResponsive(768);

  const {
    token: { colorPrimary },
  } = theme.useToken();
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemHoverBg: '#ffe8e8',
            itemSelectedColor: colorPrimary,
            subMenuItemBg: '#fff',
            controlItemBgActive: '#ffe8e8',
            groupTitleFontSize: isMobile ? 14 : 16,
            itemHeight: isMobile ? 40 : 50,
            fontSize: isMobile ? 14 : 16,
            iconSize: isMobile ? 14 : 16,
            collapsedIconSize: 18,
          },
        },
      }}
    >
      <Menu {...props} />
    </ConfigProvider>
  );
};
