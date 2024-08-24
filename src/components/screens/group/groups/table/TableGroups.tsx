import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { HeadTable, SearchListInput } from "src/components/shared";
import { UiTable, UiTooltipButton } from "src/components/ui";
import { TGroup } from "src/services/index.types";
import { useGetGroupsQuery } from "src/services/index.api";
import { useFormStorageStore, useSearchListStore } from "src/store";
import { useColumnsGroups } from "./useColumnsGroups";

export const TableGroups = () => {
	const navigate = useNavigate();
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
		<UiTable<TGroup>
			title={() => (
				<HeadTable
					title="Группы"
					children={[
						<SearchListInput key="Search" placeholder="Поиск" />,
						<UiTooltipButton
							title={"Добавить"}
							key="Add_Button"
							type="primary"
							icon={<PlusOutlined />}
							onClick={toggleDrawer}
						>
							Добавить
						</UiTooltipButton>,
					]}
				/>
			)}
			onRow={(data) => ({
				onClick: () => navigate(`/groups/${data.id}`),
			})}
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
