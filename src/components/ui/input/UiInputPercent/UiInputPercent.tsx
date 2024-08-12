import React from 'react';
import { InputNumber, InputNumberProps } from 'antd';
import { formatPercent } from 'src/utils';

export const UiInputPercent = (
  props: React.PropsWithChildren<InputNumberProps>
) => {
  return <InputNumber formatter={formatPercent} {...props} />;
};
