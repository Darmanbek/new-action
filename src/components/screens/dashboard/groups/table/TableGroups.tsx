import { FC } from "react";
import { HeadTable } from "src/components/shared";
import { UiTable } from "src/components/ui";
import { useGetDashboardCompaniesByIdQuery } from "src/services/index.api";
import { TGroup } from "src/services/groups/groups.types";
import { useAuthPersistStore } from "src/store";

import { useColumnsGroups } from "./useColumnsGroups";

const TableGroups: FC = () => {
	const currentCompany = useAuthPersistStore(
		state => state.company,
	);

	const { data: company, isLoading, isFetching } = useGetDashboardCompaniesByIdQuery({
		// is_completed: 1,
		// date: {
		// 	start: dayjs().format("YYYY-MM-DD"),
		// 	end: dayjs().format("YYYY-MM-DD"),
		// },
	}, currentCompany?.id);

	const columns = useColumnsGroups();

	return (
		<UiTable<TGroup>
			title={() => (
				<HeadTable
					title={"Группы"}
				/>
			)}
			loading={isLoading || isFetching}
			dataSource={company?.data?.groups}
			columns={columns}
		/>
	);
};

export { TableGroups };
