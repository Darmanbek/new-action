import { FC } from "react";
import { HeadTable } from "src/components/shared";
import { UiTable } from "src/components/ui";
import { useGetFinanceQuery } from "src/services/finance/finance.api";
import { TTransactionData } from "src/services/finance/finance.types";
import { priceFormatter } from "src/utils";

import { useColumnsFinance } from "./useColumnsFinance";

const TableFinance: FC = () => {
	const { data: finance, isLoading, isFetching } = useGetFinanceQuery({});

	const columns = useColumnsFinance();

	return (
		<UiTable<TTransactionData>
			title={() => (
				<HeadTable
					title={`Транзакций | Общая сумма ${priceFormatter(Number(finance?.data.total_amount))} uzs`}
				/>
			)}
			loading={isLoading || isFetching}
			columns={columns}
			dataSource={finance?.data?.transaction?.data}
		/>
	);
};

export { TableFinance };
