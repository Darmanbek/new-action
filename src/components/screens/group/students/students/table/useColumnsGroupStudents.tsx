import {
  Tooltip,
  // Badge, Avatar
} from 'antd';
import {
  EyeOutlined,
  // WechatOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { ColumnsType } from 'antd/es/table';
import { ApproveCheck } from 'src/components/shared';
import { UiButton } from 'src/components/ui';
import { TGroupStudent } from 'src/services/index.types';
// import { useNumericStringVault, useToggleStore } from 'src/store';
import { phoneFormatter } from 'src/utils';

export const useColumnsGroupStudents = () => {
  const navigate = useNavigate();
  // const setNumericStringVault = useNumericStringVault(
  //     (state) => state.setNumericStringVault
  // );
  // const toggleChatModal = useToggleStore((state) => state.toggleChatModal);

  // const onToggleChat = (id: number) => {
  //     toggleChatModal();
  //     setNumericStringVault(id);
  // };

  const columns: ColumnsType<TGroupStudent> = [
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
      title: 'Имя Фамилия',
      dataIndex: 'first_name',
      key: 'full_name',
      render: (_, n) => `${n.first_name} ${n.last_name}`,
    },
    {
      ellipsis: true,
      title: 'Телефон',
      dataIndex: 'phone',
      key: 'phone',
      render: phoneFormatter,
    },
    {
      align: 'center',
      ellipsis: true,
      title: 'Оплата',
      dataIndex: 'payment_history',
      key: 'payment_check',
      render: (payment_history: boolean) => (
        <ApproveCheck isValue={payment_history} />
      ),
    },
    {
      align: 'center',
      title: 'Взносы',
      key: 'payments',
      render: (_v, student) => (
        <Tooltip title="Смотреть">
          <UiButton
            type="primary"
            icon={<EyeOutlined />}
            onClick={() => navigate(`${student.id}/payments`)}
            aria-label="Students_Payments"
          />
        </Tooltip>
      ),
    },
  ];

  return columns;
};
