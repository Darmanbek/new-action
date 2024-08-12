import { useState } from "react";
import { Tooltip } from "antd";
import { HeadTable, SearchListInput } from "src/components/shared";
import { UiButton, UiTable } from "src/components/ui";
import { useGetTeachersQuery } from "src/services/index.api";
import { TTeacher } from "src/services/index.types";
import { useFormStorageStore, useSearchListStore } from "src/store";
import { useColumnsTeacher } from "./useColumnsTeacher";
import { PlusOutlined } from "@ant-design/icons";

export const TableTeacher = () => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const debounceValue = useSearchListStore((state) => state.debounceValue);
	const {
		data: teachers,
		isLoading,
		isFetching,
	} = useGetTeachersQuery({
		limit: 10,
		page: currentPage,
		search: debounceValue,
	});
	const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer);
	const columns = useColumnsTeacher();

	return (
		<UiTable<TTeacher>
			title={() => (
				<HeadTable
					title="Учителя"
					children={[
						<SearchListInput key={"Search"} placeholder="Поиск" />,
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
			dataSource={teachers?.data}
			columns={columns}
			loading={isLoading || isFetching}
			pagination={{
				total: teachers?.meta?.total,
				current: currentPage,
				onChange: (value) => setCurrentPage(value),
			}}
		/>
	);
};
