import ReactEcharts from "echarts-for-react";
import { FC } from "react";
import styles from "./profits.module.scss";

const FinanceProfits: FC = () => {
	const options = {
		title: {
			text: "Прибыль",
			x: "center",
		},
		tooltip: {
			trigger: "item",
			formatter: "{a} <br/>{b} : {c} ({d}%)",
		},
		legend: {
			orient: "vertical",
			bottom: "bottom",

			data: ["филиал 1", "филиал 2", "филиал 3"],
		},
		series: [
			{
				name: "Прибыль",
				type: "pie",
				radius: "55%",
				center: ["50%", "60%"],
				data: [
					{
						value: 50,
						name: "филиал 1",
					},
					{
						value: 20,
						name: "филиал 2",
					},
					{
						value: 30,
						name: "филиал 3",
					},
				],
				itemStyle: {
					emphasis: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: "rgba(0, 0, 0, 0.5)",
					},
				},
			},
		],
	};

	return (
		<section className={styles["profits"]}>
			<ReactEcharts option={options} style={{ height: 440 }} />
		</section>
	);
};

export default FinanceProfits;
