import { ColumnsType } from 'antd/es/table';
import { TFinanceDebtors } from 'src/services/index.types';
import { phoneFormatter } from 'src/utils';

export const useColumnsDebtors = () => {
  const columns: ColumnsType<TFinanceDebtors> = [
    {
      width: 50,
      ellipsis: true,
      title: '№',
      dataIndex: 'index',
      key: 'index',
      render: (_v, _r, index) => index + 1,
    },
    {
      ellipsis: true,
      title: 'Имя',
      dataIndex: 'first_name',
      key: 'first_name',
      render: (first_name) => `${first_name}`,
    },
    {
      ellipsis: true,
      title: 'Фамилия',
      dataIndex: 'last_name',
      key: 'last_name',
      render: (last_name) => `${last_name}`,
    },
    {
      ellipsis: true,
      title: 'Телефон',
      dataIndex: 'phone',
      key: 'phone',
      render: phoneFormatter,
    },
    {
      ellipsis: true,
      title: 'Баланс',
      dataIndex: 'balance',
      key: 'balance',
      render: (balance) => `${balance} сум`,
    },
  ];

  return columns;
};
