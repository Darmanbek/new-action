import { Tooltip } from 'antd';
import { HeadTable } from 'src/components/shared';
import { UiButton, UiTable } from 'src/components/ui';
import { useGetAdminsQuery } from 'src/services/index.api';
import { useFormStorageStore } from 'src/store';
import { useColumnsAdmin } from './useColumnsAdmin';
import { PlusOutlined } from '@ant-design/icons';

export const TableAdmin = () => {
  const { data: admins, isLoading, isFetching } = useGetAdminsQuery();
  const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer);
  const columns = useColumnsAdmin();

  return (
    <UiTable
      title={() => (
        <HeadTable
          title="Админы"
          children={[
            <Tooltip title="Добавить" key="Add">
              <UiButton
                key="Add_Button"
                type="primary"
                icon={<PlusOutlined />}
                onClick={toggleDrawer}
              />
            </Tooltip>,
          ]}
        />
      )}
      dataSource={admins?.data}
      columns={columns}
      loading={isLoading || isFetching}
    />
  );
};
