import type { EChartsOption } from "echarts"
import type { TDashboardStudentsRating } from "src/services/dashboard"
import { formatEmpty } from "src/utils"

interface useOptionsStudentsRatingProps {
	data?: TDashboardStudentsRating[]
}

export const useOptionsStudentsRating = ({ data }: useOptionsStudentsRatingProps) => {
	const SeriesData = data?.map((el) => ({
		value: el.rating,
		itemStyle: {
			color: "#b22234",
			borderRadius: [0, 8, 8, 0]
		}
	}))

	const SeriesName = data?.map((el) => `${el?.student?.first_name} ${el?.student?.last_name}`)

	const options: EChartsOption = {
		tooltip: {
			trigger: "axis",
			axisPointer: {
				type: "shadow"
			}
		},
		xAxis: {
			max: "dataMax"
		},
		yAxis: {
			type: "category",
			data: SeriesName,
			inverse: true
		},
		grid: {
			top: "3%",
			left: "3%",
			right: "4%",
			bottom: "3%",
			containLabel: true
		},
		series: [
			{
				realtimeSort: true,
				name: "Рейтинг",
				type: "bar",
				data: SeriesData,
				label: {
					show: true,
					position: "right",
					valueAnimation: true,
					formatter: (params) =>
						`${params.value} | ${formatEmpty(data?.find((el) => `${el?.student?.first_name} ${el?.student?.last_name}` === params?.name)?.group?.name)}`
				}
			}
		],
		legend: {
			show: false
		}
	}

	return options
}
