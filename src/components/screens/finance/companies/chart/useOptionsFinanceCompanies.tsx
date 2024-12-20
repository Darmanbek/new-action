import { EChartsOption } from "echarts";
import { TFinanceCompanies } from "src/services/finances/finances.types";
import { priceFormatter } from "src/utils";


export const useOptionsFinanceCompanies = (data?: TFinanceCompanies) => {

	const seriesData = data?.companies.map(el => ({
		value: el.total_amount,
		name: el.name,
		itemStyle: {
			color: `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`
		}
	}));

	const options: EChartsOption = {
		tooltip: {
			trigger: "item",
		},
		legend: {
			orient: "vertical",
			bottom: "bottom",
		},
		series: [
			{
				name: "Платежи",
				type: "pie",
				data: seriesData,
				// avoidLabelOverlap: false,
				radius: ["40%", "70%"],
				itemStyle: {
					borderRadius: 10,
					borderColor: "#fff",
					borderWidth: 2
				},
				label: {
					show: true,
					fontSize: 16,
					fontWeight: "bold",
					formatter: params => `${priceFormatter(Number(params.value))}`
				},
				emphasis: {
					label: {
						show: true,
						fontSize: 18,
						fontWeight: "bold"
					},
				},
				labelLine: {
					show: true
				},
			},
		]
	};

	return options;
};
