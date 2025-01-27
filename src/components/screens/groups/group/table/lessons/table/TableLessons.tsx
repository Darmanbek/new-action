import { useParams } from "react-router-dom"
import { HeadTable } from "src/components/shared"
import { UiTable } from "src/components/ui"
import { useGetGroupsByIdQuery } from "src/services/groups"
import type { TLesson } from "src/services/shared"
import { useColumnsGroup } from "./useColumnsLessons"

export const TableLessons = () => {
	const { group_id } = useParams()
	const { data: group, isLoading, isFetching } = useGetGroupsByIdQuery(group_id)

	const columns = useColumnsGroup()

	return (
		<UiTable<TLesson>
			title={() => <HeadTable title={"Уроки"} />}
			dataSource={group?.data?.lessons}
			columns={columns}
			loading={isLoading || isFetching}
		/>
	)
}
