import React from 'react';
import { InputNumber, InputNumberProps } from 'antd';
import { formatNum } from 'src/utils';

export const UiInputPrice = (
  props: React.PropsWithChildren<InputNumberProps>
) => {
  return (
    <InputNumber formatter={formatNum} style={{ width: '100%' }} {...props} />
  );
};
