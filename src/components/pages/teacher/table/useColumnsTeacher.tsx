import { Space, Tooltip, Avatar, Image } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { EditOutlined, DeleteOutlined, UserOutlined } from '@ant-design/icons';
import { GlobalPopconfirm } from 'src/components/shared';
import { UiButton } from 'src/components/ui';
import { useDeleteTeachersMutation } from 'src/services/index.api';
import { useFormStorageStore } from 'src/store';
import { TTeacher } from 'src/services/index.types';
import { phoneFormatter } from 'src/utils';

export const useColumnsTeacher = () => {
  const { mutate: deleteTeacher } = useDeleteTeachersMutation();
  const setParamsForm = useFormStorageStore((state) => state.setParamsForm);
  const onEditTeacher = (item: TTeacher) => setParamsForm(item);

  const columns: ColumnsType<TTeacher> = [
    {
      ellipsis: true,
      width: 0,
      title: 'Аватар',
      dataIndex: 'teacher_data',
      align: 'center',
      key: 'avatar',
      render: (avatar: TTeacher['teacher_data']) => {
        if (avatar && avatar?.avatar) {
          return <Avatar src={<Image src={avatar?.avatar} />} alt="avatar" />;
        } else {
          return <Avatar icon={<UserOutlined />} alt="avatar" />;
        }
      },
    },
    {
      ellipsis: true,
      title: 'Имя Фамилия',
      dataIndex: 'first_name',
      key: 'name',
      render: (_, r) => `${r?.first_name} ${r?.last_name}`,
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
      title: 'Филиалы',
      dataIndex: 'groups',
      key: 'groups',
      render: (_, r) => `${r?.first_name} ${r?.last_name}`,
    },
    {
      ellipsis: true,
      title: 'Группы',
      dataIndex: 'groups',
      key: 'groups',
      render: (_, r) => `${r?.first_name} ${r?.last_name}`,
    },
    {
      fixed: 'right',
      width: 100,
      title: 'Действия',
      key: 'action',
      render: (_, teacher) => (
        <Space>
          <Tooltip title="Изменить">
            <UiButton
              type="primary"
              color="orange"
              icon={<EditOutlined />}
              onClick={() => onEditTeacher(teacher)}
              aria-label="Edit"
            />
          </Tooltip>
          <GlobalPopconfirm
            onConfirm={() => deleteTeacher(teacher?.id)}
            title={`${teacher?.first_name} ${teacher?.last_name}`}
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
