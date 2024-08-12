import React from 'react';
import { ConfigProvider, Button, ButtonProps, theme } from 'antd';

interface UiButtonProps {
  color?: string;
  borderRadius?: number;
}

export const UiButton = (
  props: React.PropsWithChildren<UiButtonProps & ButtonProps>
) => {
  const { borderRadius, color, ...rest } = props;

  const {
    token: { colorPrimary },
  } = theme.useToken();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: color || colorPrimary,
        },
        components: {
          Button: {
            borderRadius: borderRadius || 6,
            borderRadiusLG: borderRadius || 10,
            borderRadiusSM: borderRadius || 4,
          },
        },
      }}
    >
      <Button {...rest} />
    </ConfigProvider>
  );
};
