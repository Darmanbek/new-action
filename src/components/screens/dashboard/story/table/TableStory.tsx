import type { FC } from "react"
import { HeadTable } from "src/components/shared"
import { UiTable } from "src/components/ui"
import { useGetDashboardStoryQuery } from "src/services/dashboard"
import type { TStory } from "src/services/stories"
import { useAuthPersistStore } from "src/store"
import { useColumnsStory } from "./useColumnsStory"

const TableStory: FC = () => {
	const company = useAuthPersistStore((state) => state.company)

	const { data: stories, isLoading, isFetching } = useGetDashboardStoryQuery({}, company?.id)

	const columns = useColumnsStory()

	return (
		<>
			<UiTable<TStory>
				title={() => <HeadTable title={"Новости"} />}
				loading={isLoading || isFetching}
				columns={columns}
				dataSource={stories?.data}
			/>
		</>
	)
}

export { TableStory }
