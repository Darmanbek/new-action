import { useState } from 'react';
import { Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { HeadTable, SearchListInput } from 'src/components/shared';
import { UiButton, UiTable } from 'src/components/ui';
import { useGetGroupsQuery } from 'src/services/index.api';
import { useFormStorageStore, useSearchListStore } from 'src/store';
import { useColumnsGroups } from './useColumnsGroups';

export const TableGroups = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const debounceValue = useSearchListStore((state) => state.debounceValue);
  const {
    data: groups,
    isLoading,
    isFetching,
  } = useGetGroupsQuery({
    limit: 10,
    page: currentPage,
    search: debounceValue,
  });
  const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer);
  const columns = useColumnsGroups();

  return (
    <UiTable
      title={() => (
        <HeadTable
          title="Группы"
          key={''}
          children={[
            <SearchListInput key="search-input" placeholder="Поиск" />,
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
      dataSource={groups?.data}
      columns={columns}
      loading={isLoading || isFetching}
      pagination={{
        total: groups?.meta?.total,
        current: currentPage,
        onChange: (value) => setCurrentPage(value),
      }}
    />
  );
};
