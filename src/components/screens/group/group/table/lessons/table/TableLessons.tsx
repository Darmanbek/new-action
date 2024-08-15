import { HeadTable } from "src/components/shared";
import { UiTable } from "src/components/ui";
import { useGetGroupsByIdQuery } from "src/services/index.api";
import { TLesson } from "src/services/index.types";
import { useColumnsGroup } from "./useColumnsLessons";
import { useParams } from "react-router-dom";

export const TableLessons = () => {
	const { group_id } = useParams();
	const {
		data: group,
		isLoading,
		isFetching,
	} = useGetGroupsByIdQuery(group_id);

	const columns = useColumnsGroup();

	return (
		<UiTable<TLesson>
			title={() => (
				<HeadTable
					title="Уроки"
				/>
			)}
			dataSource={group?.data?.lessons}
			columns={columns}
			loading={isLoading || isFetching}
		/>
	);
};
