import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { HeadTable, SearchListInput } from "src/components/shared";
import { UiTable } from "src/components/ui";
import { useGetDashboardCompaniesByIdQuery } from "src/services/index.api";
import { TGroup } from "src/services/groups/groups.types";
import { useAuthPersistStore, useSearchListStore } from "src/store";

import { useColumnsGroups } from "./useColumnsGroups";

const TableGroups: FC = () => {
	const navigate = useNavigate();
	const currentCompany = useAuthPersistStore(
		state => state.company,
	);
	const debounceValue = useSearchListStore((state) => state.debounceValue);

	const { data: company, isLoading, isFetching } = useGetDashboardCompaniesByIdQuery({
		// is_completed: 1,
		// date: {
		// 	start: dayjs().format("YYYY-MM-DD"),
		// 	end: dayjs().format("YYYY-MM-DD"),
		// },
		search: debounceValue,
	}, currentCompany?.id);

	const columns = useColumnsGroups();

	return (
		<UiTable<TGroup>
			title={() => (
				<HeadTable
					title={"Группы"}
					children={[
						<SearchListInput key="Search" placeholder="Поиск" />,
					]}
				/>
			)}
			onRow={(data) => ({
				onClick: () => navigate(`/groups/${data.id}`),
			})}
			loading={isLoading || isFetching}
			dataSource={company?.data?.groups}
			columns={columns}
		/>
	);
};

export { TableGroups };
