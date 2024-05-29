import { Tooltip } from "antd";
import { FC } from "react";
// import { BiArrowBack, BiPlus, BiSolidEditAlt } from "react-icons/bi";
import { HeadTable } from "src/components/shared";
import { UiButton, UiTable } from "src/components/ui";
import { useGetStudentsQuery } from "src/services";
import { useFormStorageStore } from "src/store";
import { useColumnsStudent } from "./useColumnsStudent";
import { AiOutlinePlus } from 'react-icons/ai';

const TableStudent: FC = () => {
	const { data: students, isLoading, isFetching } = useGetStudentsQuery()

	const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer);

	const columns = useColumnsStudent();

	return (
		<UiTable
			title={() => (
				<HeadTable
					title="Студенты"
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
			dataSource={students?.data}
			columns={columns}
			loading={isLoading || isFetching}
		/>
	);
};

export { TableStudent };
