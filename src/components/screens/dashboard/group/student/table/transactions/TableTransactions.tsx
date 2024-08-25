import { FC } from "react";
import { useParams } from "react-router-dom";
import { HeadTable } from "src/components/shared";
import { TTransaction } from "src/services/index.types";
import { useColumnsTransactions } from "./useColumnsTransactions";
import { UiTable } from "src/components/ui";
import { useGetDashboardCompaniesGroupsByIdQuery } from "src/services/index.api";

const TableTransactions: FC = () => {
	const { group_id, student_id } = useParams();

	const {
		data: group,
		isLoading,
		isFetching,
	} = useGetDashboardCompaniesGroupsByIdQuery(group_id);

	const columns = useColumnsTransactions();


	return (
		<UiTable<TTransaction>
			title={() => (
				<HeadTable
					title={"Транзакции"}
				/>
			)}
			dataSource={
				group?.data.students?.find((el) => el.id === student_id)
					?.transactions
			}
			columns={columns}
			loading={isLoading || isFetching}
		/>
	);
};

export { TableTransactions };
