import { FC, useState } from "react"
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
	const [params, setParams] = useState({
		page: 1,
		limit: 10
	})

	const {
		data: students,
		isLoading,
		isFetching
	} = useGetDashboardStudentsRatingQuery(
		{
			...params
		},
		company?.id
	)

	const columns = useColumnsStudentsRating()

	return (
		<UiTable<TDashboardStudentsRating>
			title={() => <HeadTable title={"Студенты"} />}
			loading={isLoading || isFetching}
			dataSource={students?.data.sort((a, b) => Number(b.rating) - Number(a.rating))}
			columns={columns}
			pagination={{
				total: students?.meta?.total,
				current: params.page,
				pageSize: params.limit,
				onChange: (page, limit) => setParams({ page, limit })
			}}
		/>
	)
}

export { TableStudentsRating }
