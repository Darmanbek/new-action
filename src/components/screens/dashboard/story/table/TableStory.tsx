import type { FC } from "react";
import { UiTable } from "src/components/ui";
import { useGetDashboardStoryQuery } from "src/services/index.api";
import { HeadTable } from "src/components/shared";
import type { TStory } from "src/services/index.types";
import { useColumnsStory } from "src/components/screens/dashboard/story/table/useColumnsStory";
import { useAuthPersistStore } from "src/store";

const TableStory: FC = () => {
	const company = useAuthPersistStore(
		state => state.company,
	);

	const { data: stories, isLoading, isFetching } = useGetDashboardStoryQuery({}, company?.id);

	const columns = useColumnsStory();

	return (
		<>
			<UiTable<TStory>
				title={() => (
					<HeadTable
						title={"Новости"}
					/>
				)}
				loading={isLoading || isFetching}
				columns={columns}
				dataSource={stories?.data}
			/>
		</>
	);
};

export { TableStory };
