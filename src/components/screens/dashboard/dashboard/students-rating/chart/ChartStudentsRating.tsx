import { Pagination } from "antd"
import EChartsReact from "echarts-for-react"
import { FC, useState } from "react"
import { UiCard } from "src/components/ui"
import { useGetDashboardStudentsRatingQuery } from "src/services/dashboard/dashboard.api"
import { useAuthPersistStore } from "src/store"
import { useOptionsStudentsRating } from "./useOptionsStudentsRating"

const ChartStudentsRating: FC = () => {
	const company = useAuthPersistStore((state) => state.company)
	const [params, setParams] = useState({
		page: 1,
		limit: 10
	})

	const {
		data: students,
		isLoading,
		isFetching
	} = useGetDashboardStudentsRatingQuery({ ...params }, company?.id)

	const options = useOptionsStudentsRating({ data: students?.data })

	return (
		<UiCard
			title={"Студенты"}
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
					minHeight: students?.data.length ? `${students?.data.length * 60}px` : "50vh",
					transition: "all 0.2s linear"
				}}
				loadingOption={{
					text: "Загрузка"
				}}
			/>
			<Pagination
				align={"center"}
				total={students?.meta?.total}
				current={params.page}
				pageSize={params.limit}
				onChange={(page, limit) => setParams({ page, limit })}
			/>
		</UiCard>
	)
}

export { ChartStudentsRating }
