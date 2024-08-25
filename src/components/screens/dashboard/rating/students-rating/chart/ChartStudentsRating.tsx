import EChartsReact from "echarts-for-react";
import { FC } from "react";
import { UiCard } from "src/components/ui";
import { useGetDashboardStudentsRatingQuery } from "src/services/dashboard/dashboard.api";
import { useAuthPersistStore } from "src/store";
import {
	useOptionsStudentsRating,
} from "./useOptionsStudentsRating";

const ChartStudentsRating: FC = () => {

	const company = useAuthPersistStore(
		state => state.company,
	);

	const {
		data: students,
		isLoading,
		isFetching,
	} = useGetDashboardStudentsRatingQuery(company?.id);

	const options = useOptionsStudentsRating({ data: students?.data });

	return (
		<UiCard
			title={"Студенты"}
			styles={{
				title: {
					fontWeight: 500,
					fontSize: 20,
				},
				body: {
					padding: 0,
				},
				header: {
					border: "none",
				},
			}}
		>
			<EChartsReact
				option={options}
				showLoading={isLoading || isFetching}
				style={{
					minHeight: students?.data.length ? `${students?.data.length * 6}vh` : "auto"
				}}
				loadingOption={{
					text: "Загрузка"
				}}
			/>
		</UiCard>
	);
};

export { ChartStudentsRating };
