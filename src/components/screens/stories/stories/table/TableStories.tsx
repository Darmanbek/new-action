import { PlusOutlined } from "@ant-design/icons"
import type { FC } from "react"
import { HeadTable } from "src/components/shared"
import { UiTable, UiTooltipButton } from "src/components/ui"
import { type TStory, useGetStoriesQuery } from "src/services/stories"
import { useFormStorageStore } from "src/store"
import { useColumnsStories } from "./useColumnsStories"

const TableStories: FC = () => {
	const { data: stories, isLoading, isFetching } = useGetStoriesQuery()

	const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer)

	const columns = useColumnsStories()

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
							</UiTooltipButton>
						]}
					/>
				)}
				loading={isLoading || isFetching}
				columns={columns}
				dataSource={stories?.data}
			/>
		</>
	)
}

export { TableStories }
