import { FC } from "react"
import { HeadTable } from "src/components/shared"
import { UiTable } from "src/components/ui"
import {
	type TDashboardTeachersRating,
	useGetDashboardTeachersRatingQuery
} from "src/services/dashboard"
import { useAuthPersistStore } from "src/store"

import { useColumnsTeachersRating } from "./useColumnsTeachersRating"

const TableTeachersRating: FC = () => {
	const company = useAuthPersistStore((state) => state.company)

	const { data: teachers, isLoading, isFetching } = useGetDashboardTeachersRatingQuery(company?.id)

	const columns = useColumnsTeachersRating()

	return (
		<UiTable<TDashboardTeachersRating>
			title={() => <HeadTable title={"Учителя"} />}
			loading={isLoading || isFetching}
			dataSource={teachers?.data.sort((a, b) => Number(b.rating) - Number(a.rating))}
			columns={columns}
			// pagination={false}
		/>
	)
}

export { TableTeachersRating }
