import { Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useNavigate, useParams } from 'react-router-dom';
import { PlusOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { HeadTable } from 'src/components/shared';
import { UiButton, UiTable } from 'src/components/ui';
import { useFormStorageStore } from 'src/store';
import { useGetGroupsByIdQuery } from 'src/services/index.api';
import { useColumnsGroupStudentsBalances } from './useColumnsGroupStudentsBalances';

export const TableGroupStudentsBalances = () => {
  const navigate = useNavigate();
  const { group_id, student_id } = useParams();
  const {
    data: payments,
    isLoading,
    isFetching,
  } = useGetGroupsByIdQuery(group_id);
  const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer);
  const columns = useColumnsGroupStudentsBalances();

  return (
    <UiTable
      title={() => (
        <HeadTable
          title="Оплата история в студенты"
          children={[
            <Tooltip title="Добавить" key="Add">
              <UiButton
                key="Add_Button"
                type="primary"
                icon={<PlusOutlined />}
                onClick={toggleDrawer}
              />
            </Tooltip>,
            <Tooltip title="Назад" key="Back">
              <UiButton
                key="Back_Button"
                type="primary"
                icon={<ArrowLeftOutlined />}
                onClick={() => navigate(-1)}
              />
            </Tooltip>,
          ]}
        />
      )}
      dataSource={
        payments?.data?.students.find((el) => el.id === student_id)
          ?.payment_history
      }
      columns={columns as ColumnsType}
      loading={isLoading || isFetching}
    />
  );
};
