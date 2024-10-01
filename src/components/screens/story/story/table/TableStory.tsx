import type { FC } from "react";
import { UiTable, UiTooltipButton } from "src/components/ui";
import { useGetStoryQuery } from "src/services/index.api";
import { HeadTable } from "src/components/shared";
import { PlusOutlined } from "@ant-design/icons";
import type { TStory } from "src/services/index.types";
import { useColumnsStory } from "./useColumnsStory";
import { useFormStorageStore } from "src/store";

const TableStory: FC = () => {

	const { data: stories, isLoading, isFetching } = useGetStoryQuery();

	const toggleDrawer = useFormStorageStore(
		state => state.toggleDrawer
	);

	const columns = useColumnsStory();

	return (
		<>
			<UiTable<TStory>
				title={() => (
					<HeadTable
						title={"Новости"}
						children={[
							<UiTooltipButton
								key={"Add"}
								title={"Добавить"}
								type={"primary"}
								icon={<PlusOutlined />}
								onClick={toggleDrawer}
							>
								Добавить
							</UiTooltipButton>,
						]}
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
