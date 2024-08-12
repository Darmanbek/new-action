import { Space, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { GlobalPopconfirm, ApproveCheck } from 'src/components/shared';
import { UiButton } from 'src/components/ui';
import { useDeleteAcceptancesMutation } from 'src/services/index.api';
import { TAcceptance } from 'src/services/index.types';
import { useFormStorageStore } from 'src/store';
import { phoneFormatter } from 'src/utils';

export const useColumnsAcceptance = () => {
  const { mutate: deleteAcceptance } = useDeleteAcceptancesMutation();
  const onEditAcceptance = (item: TAcceptance) => setParamsForm(item);
  const setParamsForm = useFormStorageStore((state) => state.setParamsForm);

  const columns: ColumnsType<TAcceptance> = [
    {
      ellipsis: true,
      title: 'Имя Фамилия',
      dataIndex: 'student',
      key: 'name',
      render: (_name, st) => `${st.student.last_name}`,
    },
    {
      ellipsis: true,
      title: 'Телефон',
      dataIndex: 'student',
      key: 'phone',
      render: (_phone, st) => phoneFormatter(st.student.phone),
    },
    {
      ellipsis: true,
      title: 'Заявка',
      dataIndex: 'is_acceptance',
      key: 'is_acceptance',
      render: (is_acceptance: boolean) => (
        <ApproveCheck isValue={is_acceptance} />
      ),
    },
    {
      ellipsis: true,
      title: 'Группа',
      dataIndex: 'group',
      key: 'group_name',
      render: (_, group) => `${group.group.name}`,
    },
    {
      fixed: 'right',
      width: 100,
      title: 'Действия',
      key: 'action',
      render: (_, acceptances) => (
        <Space>
          <Tooltip title="Изменить">
            <UiButton
              type="primary"
              color="orange"
              icon={<EditOutlined />}
              onClick={() => onEditAcceptance(acceptances)}
              aria-label="Edit"
            />
          </Tooltip>
          <GlobalPopconfirm
            onConfirm={() => deleteAcceptance(acceptances.id)}
            title={`${acceptances.student.last_name}`}
          >
            <Tooltip title="Удалить">
              <UiButton
                type="primary"
                danger
                icon={<DeleteOutlined />}
                aria-label="Delete"
              />
            </Tooltip>
          </GlobalPopconfirm>
        </Space>
      ),
    },
  ];

  return columns;
};
