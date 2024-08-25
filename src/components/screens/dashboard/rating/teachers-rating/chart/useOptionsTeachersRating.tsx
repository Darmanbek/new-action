import { EChartsOption } from "echarts";
import { TDashboardTeachersRating } from "src/services/index.types";

interface useOptionsStudentsRatingProps {
	data?: TDashboardTeachersRating[];
}

export const useOptionsTeachersRating = ({ data }: useOptionsStudentsRatingProps) => {

	const SeriesData = data?.map(el => ({
		value: el.rating,
		itemStyle: {
			color: "#b22234",
			borderRadius: [0, 8, 8, 0]
		}
	}));

	const SeriesName = data?.map(el => `${el.first_name} ${el.last_name}`);

	const options: EChartsOption = {
		tooltip: {
			trigger: "axis",
			axisPointer: {
				type: "shadow",
			},
		},
		xAxis: {
			max: "dataMax",
		},
		yAxis: {
			type: "category",
			data: SeriesName,
			inverse: true,
			animationDuration: 300,
			animationDurationUpdate: 300,
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
				},
			},
		],
		legend: {
			show: false,
		},
		animationDuration: 0,
		animationDurationUpdate: 3000,
		animationEasing: "linear",
		animationEasingUpdate: "linear",
	};

	return options;
};
