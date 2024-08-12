import { Tooltip } from 'antd';
import { HeadTable } from 'src/components/shared';
import { UiButton, UiTable } from 'src/components/ui';
import { useGetGroupsByIdQuery } from 'src/services/index.api';
// import { useFormStorageStore } from "src/store";
import { useColumnsGroup } from './useColumnsGroupLessons';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';

export const TableGroupLessons = () => {
  const { group_id } = useParams();
  const navigate = useNavigate();
  const {
    data: group,
    isLoading,
    isFetching,
  } = useGetGroupsByIdQuery(group_id);

  // const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer);

  const columns = useColumnsGroup();

  return (
    <UiTable
      title={() => (
        <HeadTable
          title="Задания"
          children={[
            // <Tooltip title="Добавить" key="Add">
            // 	<UiButton
            // 		key="Add_Button"
            // 		type="primary"
            // 		icon={<AiOutlinePlus />}
            // 		onClick={toggleDrawer}
            // 	/>
            // </Tooltip>,
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
      dataSource={group?.data?.lessons}
      columns={columns}
      loading={isLoading || isFetching}
    />
  );
};
