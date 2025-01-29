import { type FC, useState } from "react"
import { HeadTable } from "src/components/shared"
import { UiTable } from "src/components/ui"
import { TStudent } from "src/services/shared"
import { useGetStudentsQuery } from "src/services/students"
import { useColumnsStudents } from "./useColumnsStudents"

const TableStudents: FC = () => {
	const [params, setParams] = useState({
		page: 1,
		limit: 10,
		per_page: 10
	})

	const {
		data: students,
		isLoading,
		isFetching
	} = useGetStudentsQuery({
		...params
	})

	const columns = useColumnsStudents()

	return (
		<>
			<UiTable<TStudent>
				title={() => <HeadTable title={"Студенты"} />}
				loading={isLoading || isFetching}
				dataSource={students?.data}
				columns={columns}
				pagination={{
					total: students?.meta?.total,
					current: params.page,
					pageSize: params.limit,
					onChange: (page, limit) =>
						setParams({
							page,
							limit,
							per_page: limit
						})
				}}
			/>
		</>
	)
}

export { TableStudents }
