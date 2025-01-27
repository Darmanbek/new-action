import type { FC } from "react"
import { useParams } from "react-router-dom"
import { HeadTable } from "src/components/shared"
import { UiTable } from "src/components/ui"
import { useGetDashboardCompaniesGroupsByIdQuery } from "src/services/dashboard"
import type { TAssessment } from "src/services/shared"
import { useColumnsAssessments } from "./useColumnsAssessments"

const TableAssessments: FC = () => {
	const { group_id, student_id } = useParams()

	const { data: group, isLoading, isFetching } = useGetDashboardCompaniesGroupsByIdQuery(group_id)

	const columns = useColumnsAssessments()

	return (
		<UiTable<TAssessment>
			title={() => <HeadTable title={"Посещаемость"} />}
			dataSource={group?.data.students.find((el) => el.id === student_id)?.assessments}
			columns={columns}
			loading={isLoading || isFetching}
		/>
	)
}

export { TableAssessments }
