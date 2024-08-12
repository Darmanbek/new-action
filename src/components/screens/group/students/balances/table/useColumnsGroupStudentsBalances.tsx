import { ColumnsType } from 'antd/es/table';
// import { ApproveCheck } from 'src/components/shared';
import { priceFormatter } from 'src/utils';
import { TGroupStudentPaymentHistory } from 'src/services/index.types';

export const useColumnsGroupStudentsBalances = () => {
  const columns: ColumnsType<TGroupStudentPaymentHistory> = [
    {
      width: 50,
      ellipsis: true,
      title: '№',
      dataIndex: 'index',
      key: 'index',
      render: (_v, _r, index) => index + 1,
    },
    // {
    //     align: 'center',
    //     ellipsis: true,
    //     title: 'Оплата',
    //     dataIndex: 'payment_check',
    //     key: 'payment_check',
    //     render: (payment_history: boolean) => (
    //         <ApproveCheck isValue={payment_history} />
    //     ),
    // },
    {
      ellipsis: true,
      title: 'Сумма',
      dataIndex: 'amount',
      key: 'amount',
      render: (_, pay: TGroupStudentPaymentHistory) =>
        `${priceFormatter(pay.amount)}`,
    },
    {
      ellipsis: true,
      title: 'Наличие',
      dataIndex: 'payment_type',
      key: 'payment_type',
      render: (_, pay: TGroupStudentPaymentHistory) => `${pay.payment_type}`,
    },
    {
      ellipsis: true,
      title: 'Число',
      dataIndex: 'date',
      key: 'date',
      render: (_, pay: TGroupStudentPaymentHistory) => `${pay.date}`,
    },
  ];

  return columns;
};
