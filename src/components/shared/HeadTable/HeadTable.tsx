import { ReactNode } from 'react';
import { Space } from 'antd';
import styles from './head.module.scss';

interface HeadTableProps {
  title: string;
  children?: ReactNode[];
}

export const HeadTable = ({
  children,
  title,
}: React.PropsWithChildren<HeadTableProps>) => (
  <div className={styles.head}>
    <h3>{title}</h3>
    <Space align="start">
      {children?.map((child, index) => <div key={index}>{child}</div>)}
    </Space>
  </div>
);
