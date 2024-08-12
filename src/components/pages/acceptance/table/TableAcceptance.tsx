import { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
// import { Tooltip } from 'antd';
import { HeadTable, SearchListInput } from 'src/components/shared';
import {
  // UiButton,
  UiTable,
} from 'src/components/ui';
import { useGetAcceptancesQuery } from 'src/services/index.api';
import {
  // useFormStorageStore,
  useSearchListStore,
} from 'src/store';
import { useColumnsAcceptance } from './useColumnsAcceptance';
// import { PlusOutlined } from '@ant-design/icons';

export const TableAcceptance = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const debounceValue = useSearchListStore((state) => state.debounceValue);
  const {
    data: acceptances,
    isLoading,
    isFetching,
  } = useGetAcceptancesQuery({
    limit: 10,
    page: currentPage,
    search: debounceValue,
  });
  // const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer);
  const columns = useColumnsAcceptance();

  return (
    <UiTable
      title={() => (
        <HeadTable
          title="Заявки"
          children={[
            <SearchListInput placeholder="Поиск" />,
            // <Tooltip title="Добавить" key="Add">
            //     <UiButton
            //         key="Add_Button"
            //         type="primary"
            //         icon={<PlusOutlined />}
            //         onClick={toggleDrawer}
            //     />
            // </Tooltip>,
          ]}
        />
      )}
      dataSource={acceptances?.data}
      columns={columns as ColumnsType}
      loading={isLoading || isFetching}
      pagination={{
        total: acceptances?.meta?.total,
        current: currentPage,
        onChange: (value) => setCurrentPage(value),
      }}
    />
  );
};
