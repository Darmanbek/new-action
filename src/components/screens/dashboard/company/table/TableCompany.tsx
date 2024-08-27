import { FC } from "react";
import { HeadTable } from "src/components/shared";
import { UiTable } from "src/components/ui";
import { useGetDashboardCompaniesQuery } from "src/services/index.api";
import { TDashboardCompany } from "src/services/index.types";
import { useAuthPersistStore } from "src/store";

import { useColumnsCompany } from "./useColumnsCompany";

const TableCompany: FC = () => {
	const toCompany = useAuthPersistStore(
		state => state.toCompany,
	);
	const { data: companies, isLoading, isFetching } = useGetDashboardCompaniesQuery();

	const columns = useColumnsCompany();
1
	return (
		<UiTable<TDashboardCompany>
			title={() => (
				<HeadTable
					title={"Филиалы"}
				/>
			)}
			onRow={(data) => ({
				onClick: () => toCompany(data),
			})}
			loading={isLoading || isFetching}
			dataSource={companies?.data}
			columns={columns}
		/>
	);
};

export { TableCompany };
