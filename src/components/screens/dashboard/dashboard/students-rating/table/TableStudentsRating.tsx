import type { FC } from "react"
import { HeadTable } from "src/components/shared"
import { UiTable } from "src/components/ui"
import {
	type TDashboardStudentsRating,
	useGetDashboardStudentsRatingQuery
} from "src/services/dashboard"
import { useAuthPersistStore } from "src/store"

import { useColumnsStudentsRating } from "./useColumnsStudentsRating"

const TableStudentsRating: FC = () => {
	const company = useAuthPersistStore((state) => state.company)

	const { data: students, isLoading, isFetching } = useGetDashboardStudentsRatingQuery(company?.id)

	const columns = useColumnsStudentsRating()

	return (
		<UiTable<TDashboardStudentsRating>
			title={() => <HeadTable title={"Студенты"} />}
			loading={isLoading || isFetching}
			dataSource={students?.data.sort((a, b) => Number(b.rating) - Number(a.rating))}
			columns={columns}
			pagination={false}
		/>
	)
}

export { TableStudentsRating }
