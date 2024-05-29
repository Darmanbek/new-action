import { Tooltip } from "antd";
import { FC } from "react";
// import { BiArrowBack, BiPlus, BiSolidEditAlt } from "react-icons/bi";
import { HeadTable } from "src/components/shared";
import { UiButton, UiTable } from "src/components/ui";
import { useGetTeachersQuery } from "src/services";
import { useFormStorageStore } from "src/store";
import { useColumnsTeacher } from "./useColumnsTeacher";
import { AiOutlinePlus } from 'react-icons/ai';

const TableTeacher: FC = () => {
	const { data: teachers, isLoading, isFetching } = useGetTeachersQuery()

	const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer);

	const columns = useColumnsTeacher();

	return (
		<UiTable
			title={() => (
				<HeadTable
					title="Учителя"
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
			dataSource={teachers?.data}
			columns={columns}
			loading={isLoading || isFetching}
		/>
	);
};

export { TableTeacher };
