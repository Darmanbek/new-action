import { Pagination } from "antd"
import EChartsReact from "echarts-for-react"
import { FC, useEffect, useState } from "react"
import { UiCard } from "src/components/ui"
import { TDashboardTeachersRating } from "src/services/dashboard"
import { useGetDashboardTeachersRatingQuery } from "src/services/dashboard/dashboard.api"
import { useAuthPersistStore } from "src/store"
import { useOptionsTeachersRating } from "./useOptionsTeachersRating"

const ChartTeachersRating: FC = () => {
	const company = useAuthPersistStore((state) => state.company)
	const [params, setParams] = useState({
		page: 1,
		limit: 10
	})

	const splitArrayIntoChunks = (array: TDashboardTeachersRating[], chunkSize: number) => {
		const chunks: TDashboardTeachersRating[][] = []
		for (let i = 0; i < array.length; i += chunkSize) {
			chunks.push(array.slice(i, i + chunkSize))
		}
		return chunks
	}

	const { data: teachers, isLoading, isFetching } = useGetDashboardTeachersRatingQuery(company?.id)

	const paginatedData = splitArrayIntoChunks(teachers?.data || [], params.limit)

	const options = useOptionsTeachersRating({ data: paginatedData?.[params.page - 1] })

	useEffect(() => {
		setParams({ page: 1, limit: 10 })
	}, [company?.id])
	return (
		<UiCard
			title={"Учителя"}
			styles={{
				body: {
					padding: 0
				},
				header: {
					padding: 16,
					border: "none"
				}
			}}
		>
			<EChartsReact
				option={options}
				showLoading={isLoading || isFetching}
				style={{
					minHeight: paginatedData[params.page - 1]?.length
						? `${paginatedData[params.page - 1]?.length * 60}px`
						: "50vh",
					transition: "height 0.2s linear"
				}}
				loadingOption={{
					text: "Загрузка"
				}}
			/>
			<Pagination
				align={"center"}
				total={teachers?.data?.length}
				current={params.page}
				pageSize={params.limit}
				onChange={(page, limit) => setParams({ page, limit })}
			/>
		</UiCard>
	)
}

export { ChartTeachersRating }
