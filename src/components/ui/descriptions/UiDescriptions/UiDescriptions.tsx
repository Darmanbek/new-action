import React from 'react';
import { ConfigProvider, Descriptions, DescriptionsProps } from 'antd';

export const UiDescriptions = (
  props: React.PropsWithChildren<DescriptionsProps>
) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Descriptions: {
            labelBg: '#fff',
          },
        },
      }}
    >
      <Descriptions {...props} />
    </ConfigProvider>
  );
};
