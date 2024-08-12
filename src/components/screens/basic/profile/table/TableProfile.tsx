import { Tooltip } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';
import { HeadTable } from 'src/components/shared';
import { UiButton, UiTable } from 'src/components/ui';
import { useGetMeQuery } from 'src/services/index.api';
import { useFormStorageStore } from 'src/store';
import { useColumnsProfile } from './useColumnsProfile';

export const TableProfile = () => {
  const { data: user, isLoading } = useGetMeQuery();
  const setParamsForm = useFormStorageStore((state) => state.setParamsForm);
  const navigate = useNavigate();
  const columns = useColumnsProfile();

  return (
    <UiTable
      title={() => (
        <HeadTable
          title="Профиль"
          children={[
            <Tooltip title="Изменить" key="Edit">
              <UiButton
                key="Edit_Button"
                type="primary"
                icon={<EditOutlined />}
                onClick={() => setParamsForm(user?.data)}
                aria-label="Edit"
              />
            </Tooltip>,
            <Tooltip title="Назад" key="Back">
              <UiButton
                key="Back_Button"
                type="primary"
                icon={<DeleteOutlined />}
                onClick={() => navigate(-1)}
              />
            </Tooltip>,
          ]}
        />
      )}
      dataSource={[user?.data] as any}
      columns={columns as ColumnsType}
      loading={isLoading}
      pagination={false}
    />
  );
};
