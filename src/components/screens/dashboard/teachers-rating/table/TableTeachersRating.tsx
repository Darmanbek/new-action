import { FC } from "react";
import { HeadTable } from "src/components/shared";
import { UiTable } from "src/components/ui";
import { useGetDashboardTeachersRatingQuery } from "src/services/index.api";
import { TDashboardTeachersRating } from "src/services/index.types";

import { useColumnsTeachersRating } from "./useColumnsTeachersRating";

const TableTeachersRating: FC = () => {
	const { data: teachers, isLoading, isFetching } = useGetDashboardTeachersRatingQuery();

	const columns = useColumnsTeachersRating();

	return (
		<UiTable<TDashboardTeachersRating>
			title={() => (
				<HeadTable title={"Учителя"} />
			)}
			loading={isLoading || isFetching}
			dataSource={teachers?.data}
			columns={columns}
		/>
	);
};

export { TableTeachersRating };
