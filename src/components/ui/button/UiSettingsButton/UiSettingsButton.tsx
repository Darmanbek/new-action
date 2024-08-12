import { SettingOutlined } from '@ant-design/icons';
import { Button, ButtonProps, ConfigProvider } from 'antd';
import { FC } from 'react';


const UiSettingsButton: FC<ButtonProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadiusLG: 99,
          borderRadius: 99,
          borderRadiusSM: 99,
        },
        components: {
          Button: {
            paddingBlock: 0,
            paddingBlockLG: 0,
            paddingInline: 0,
            paddingInlineLG: 0,
          },
        },
      }}
    >
      <Button
        {...rest}
      >
        {children}
        <SettingOutlined style={{ fontSize: 20, paddingInline: 11, paddingLeft: 8 }} />
      </Button>
    </ConfigProvider>
  );
};

export { UiSettingsButton };
