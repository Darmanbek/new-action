import React from 'react';
import { Tag } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

interface IApproveCheck {
  isValue: boolean;
}

export const ApproveCheck = ({
  isValue,
}: React.PropsWithChildren<IApproveCheck>) => (
  <Tag
    icon={isValue ? <CheckOutlined /> : <CloseOutlined />}
    color={isValue ? 'green' : 'red'}
  />
);
