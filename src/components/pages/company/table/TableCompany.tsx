import { Tooltip } from 'antd';
import { HeadTable } from 'src/components/shared';
import { UiButton, UiTable } from 'src/components/ui';
import { useGetCompaniesQuery } from 'src/services/index.api';
import { useFormStorageStore } from 'src/store';
import { useColumnsCompany } from './useColumnsCompany';
import { PlusOutlined } from '@ant-design/icons';

export const TableCompany = () => {
  const { data: companies, isLoading, isFetching } = useGetCompaniesQuery();
  const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer);
  const columns = useColumnsCompany();

  return (
    <UiTable
      title={() => (
        <HeadTable
          title="Филиалы"
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
      dataSource={companies?.data}
      columns={columns}
      loading={isLoading || isFetching}
    />
  );
};
