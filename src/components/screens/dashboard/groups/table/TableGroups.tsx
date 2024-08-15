import dayjs from "dayjs";
import { FC, useEffect, useState } from "react";
import { HeadTable } from "src/components/shared";
import { UiSelect, UiTable } from "src/components/ui";
import { useGetDashboardCompaniesByIdQuery, useGetDashboardCompaniesQuery } from "src/services/index.api";
import { TGroup } from "src/services/groups/groups.types";

import { useColumnsGroups } from "./useColumnsGroups";

const TableGroups: FC = () => {
	const [companyId, setCompanyId] = useState("");

	const { data: companies } = useGetDashboardCompaniesQuery();
	const { data: company, isLoading, isFetching } = useGetDashboardCompaniesByIdQuery({
		is_completed: 1,
		date: [dayjs().format("YYYY-MM-DD"), dayjs().format("YYYY-MM-DD")]
	}, companyId);

	const columns = useColumnsGroups();

	useEffect(() => {
		if (companies) {
			setCompanyId(companies?.data[0]?.id);
		}
	}, [companies]);
	return (
		<UiTable<TGroup>
			title={() => (
				<HeadTable
					title={`Группы | ${company?.data?.first_name} ${company?.data?.last_name}`}
					children={[
						<UiSelect
							key={"Companies"}
							options={companies?.data.map(company => ({
								value: company.id,
								label: company.name
							}))}
							value={companyId}
							onChange={setCompanyId}
						/>
					]}
				/>
			)}
			loading={isLoading || isFetching}
			dataSource={company?.data?.groups}
			columns={columns}
		/>
	);
};

export { TableGroups };
