import { Tooltip } from "antd";
import { FC } from "react";
// import { BiArrowBack, BiPlus, BiSolidEditAlt } from "react-icons/bi";
import { HeadTable } from "src/components/shared";
import { UiButton, UiTable } from "src/components/ui";
import { useGetGroupsQuery } from "src/services";
import { useFormStorageStore } from "src/store";
import { useColumnsGroups } from "./useColumnsGroups";
import { AiOutlinePlus } from 'react-icons/ai';

const TableGroups: FC = () => {
	const { data: groups, isLoading, isFetching } = useGetGroupsQuery()

	const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer);

	const columns = useColumnsGroups();

	return (
		<UiTable
			title={() => (
				<HeadTable
					title="Группы"
					children={[
						<Tooltip title="Добавить" key="Add">
							<UiButton
								key="Add_Button"
								type="primary"
								icon={<AiOutlinePlus />}
								onClick={toggleDrawer}
							/>
						</Tooltip>,
					]}
				/>
			)}
			dataSource={groups?.data}
			columns={columns}
			loading={isLoading || isFetching}
		/>
	);
};

export { TableGroups };
