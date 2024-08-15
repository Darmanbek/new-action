import { FC } from "react";
import { HeadTable } from "src/components/shared";
import { UiTable } from "src/components/ui";
import { useGetDashboardCompaniesQuery } from "src/services/index.api";
import { TDashboardCompany } from "src/services/index.types";

import { useColumnsCompanies } from "./useColumnsCompanies";

const TableCompanies: FC = () => {
	const { data: companies, isLoading, isFetching } = useGetDashboardCompaniesQuery();

	const columns = useColumnsCompanies();

	return (
		<UiTable<TDashboardCompany>
			title={() => (
				<HeadTable
					title={"Филиалы"}
				/>
			)}
			loading={isLoading || isFetching}
			dataSource={companies?.data}
			columns={columns}
		/>
	);
};

export { TableCompanies };
