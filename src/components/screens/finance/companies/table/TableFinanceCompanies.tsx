import { FC, useEffect, useState } from "react";
import { HeadTable } from "src/components/shared";
import { UiSelect, UiTable } from "src/components/ui";
import { useGetCompaniesQuery } from "src/services/companies/companies.api";
import { useGetFinanceCompaniesByIdQuery } from "src/services/finances/finances.api";
import { TFinanceTransactionData } from "src/services/finances/finances.types";
import { priceFormatter } from "src/utils";

import { useColumnsFinanceCompanies } from "./useColumnsFinanceCompanies";

const TableFinanceCompanies: FC = () => {
	const [company, setCompany] = useState<string>();
	const { data: finance, isLoading, isFetching } = useGetFinanceCompaniesByIdQuery({}, company);

	const { data: companies } = useGetCompaniesQuery();

	const columns = useColumnsFinanceCompanies();

	useEffect(() => {
		if (companies) {
			setCompany(companies?.data[0]?.id);
		}
	}, [companies]);
	return (
		<UiTable<TFinanceTransactionData>
			title={() => (
				<HeadTable
					title={`Транзакций | Общая сумма ${priceFormatter(Number(finance?.data.profit))} uzs`}
					children={[
						<UiSelect
							key={"Companies"}
							options={companies?.data.map(company => ({
								value: company.id,
								label: company.name,
							}))}
							value={company}
							onChange={setCompany}
						/>
					]}
				/>
			)}
			loading={isLoading || isFetching}
			columns={columns}
			dataSource={finance?.data?.transactions?.data}
		/>
	);
};

export { TableFinanceCompanies };
