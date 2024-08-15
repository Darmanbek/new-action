import { EChartsOption } from "echarts";
import { TFinanceCompanies } from "src/services/finance/finance.types";


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
			// formatter: "<b>{a}</b> <br/>{b}: {c} ({d}%)",
		},
		legend: {
			orient: "vertical",
			bottom: "bottom",

			// data: categoryData,
		},
		series: [
			{
				name: "Платежи",
				type: "pie",
				data: seriesData,
				avoidLabelOverlap: false,
				radius: ["40%", "70%"],
				itemStyle: {
					borderRadius: 10,
					borderColor: "#fff",
					borderWidth: 2
				},
				label: {
					show: false,
					position: "center",
				},
				emphasis: {
					label: {
						show: true,
						fontSize: 18,
						fontWeight: "bold"
					}
				},
				labelLine: {
					show: false
				},
			},
		]
	};

	return options;
};
