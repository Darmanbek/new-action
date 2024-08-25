import { FC } from "react";
import { HeadTable } from "src/components/shared";
import { UiTable } from "src/components/ui";
import { useGetDashboardStudentsRatingQuery } from "src/services/index.api";
import { TDashboardStudentsRating } from "src/services/index.types";
import { useAuthPersistStore } from "src/store";

import { useColumnsStudentsRating } from "./useColumnsStudentsRating";

const TableStudentsRating: FC = () => {
	const company = useAuthPersistStore(
		state => state.company,
	);

	const {
		data: students,
		isLoading,
		isFetching,
	} = useGetDashboardStudentsRatingQuery(company?.id);

	const columns = useColumnsStudentsRating();

	return (
		<UiTable<TDashboardStudentsRating>
			title={() => (
				<HeadTable title={"Студенты"} />
			)}
			loading={isLoading || isFetching}
			dataSource={students?.data}
			columns={columns}
		/>
	);
};

export { TableStudentsRating };
