import { Space, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { ApproveCheck, GlobalPopconfirm } from 'src/components/shared';
import { UiButton } from 'src/components/ui';
import { useDeleteGroupsMutation } from 'src/services/index.api';
import { TGroup, TTeacher } from 'src/services/index.types';
import { useFormStorageStore } from 'src/store';
import { priceFormatter, dateFormatter } from 'src/utils';

export const useColumnsGroups = () => {
  const navigate = useNavigate();
  const { mutate: deleteGroups } = useDeleteGroupsMutation();
  const setParamsForm = useFormStorageStore((state) => state.setParamsForm);
  const onEditGroups = (item: TGroup) => setParamsForm(item);

  const columns: ColumnsType<TGroup> = [
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
      title: 'Название группы',
      dataIndex: 'name',
      key: 'name',
    },
    {
      ellipsis: true,
      title: 'Учитель',
      dataIndex: 'teachers',
      key: 'teachers',
      render: (teachers) => {
        const teacher = teachers.find((t: TTeacher) => !t.assistant);
        return teacher ? `${teacher.first_name} ${teacher.last_name}` : '-';
      },
    },
    {
      ellipsis: true,
      title: 'Ассистент',
      dataIndex: 'teachers',
      key: 'assistant',
      render: (teachers) => {
        const assistant = teachers.find((t: TTeacher) => t.assistant);
        return assistant
          ? `${assistant.first_name} ${assistant.last_name}`
          : '-';
      },
    },
    {
      ellipsis: true,
      title: 'Стартовая дата',
      dataIndex: 'start_date',
      key: 'start_date',
      render: (date) => `${dateFormatter(date)}`,
    },
    {
      ellipsis: true,
      title: 'Продолжительность',
      dataIndex: 'duration',
      key: 'duration',
      render: (duration) => `${duration} месяц`,
    },
    {
      title: 'Цена',
      dataIndex: 'price',
      key: 'price',
      render: (pr) => `${priceFormatter(pr)} uzs`,
    },
    {
      align: 'center',
      title: 'Завершено',
      dataIndex: 'is_completed',
      key: 'is_completed',
      render: (is_completed: boolean) => (
        <ApproveCheck isValue={is_completed} />
      ),
    },
    {
      align: 'center',
      title: 'Уроки',
      key: 'lessons',
      render: (_v, groups) => (
        <Tooltip title="Смотреть">
          <UiButton
            type="primary"
            icon={<EyeOutlined />}
            onClick={() => navigate(`/groups/${groups.id}/lessons`)}
            aria-label="lessons"
          />
        </Tooltip>
      ),
    },
    {
      align: 'center',
      title: 'Студенты',
      key: 'students',
      render: (_v, groups) => (
        <Tooltip title="Смотреть">
          <UiButton
            type="primary"
            icon={<EyeOutlined />}
            onClick={() => navigate(`/groups/${groups.id}/students`)}
            aria-label="Students"
          />
        </Tooltip>
      ),
    },
    {
      fixed: 'right',
      align: 'center',
      width: 150,
      title: 'Действия',
      key: 'action',
      render: (_, groups) => (
        <Space>
          <Tooltip title="Изменить">
            <UiButton
              type="primary"
              color="orange"
              icon={<EditOutlined />}
              onClick={() => onEditGroups(groups)}
              aria-label="Edit"
            />
          </Tooltip>
          <GlobalPopconfirm
            onConfirm={() => deleteGroups(groups.id)}
            title={groups.name}
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
