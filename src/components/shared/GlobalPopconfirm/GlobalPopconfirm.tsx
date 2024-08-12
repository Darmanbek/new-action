import React from 'react';
import { Popconfirm } from 'antd';
import { PopconfirmProps } from 'antd/lib';

export const GlobalPopconfirm = (
  props: React.PropsWithChildren<PopconfirmProps>
) => <Popconfirm cancelText="Нет" okText="Да" placement="leftTop" {...props} />;
