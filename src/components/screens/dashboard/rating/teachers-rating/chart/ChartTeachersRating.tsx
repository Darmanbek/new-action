import EChartsReact from "echarts-for-react";
import { FC } from "react";
import { UiCard } from "src/components/ui";
import {
	useGetDashboardTeachersRatingQuery,
} from "src/services/dashboard/dashboard.api";
import { useAuthPersistStore } from "src/store";
import {
	useOptionsTeachersRating,
} from "./useOptionsTeachersRating";

const ChartTeachersRating: FC = () => {

	const company = useAuthPersistStore(
		state => state.company,
	);

	const {
		data: teachers,
		isLoading,
		isFetching,
	} = useGetDashboardTeachersRatingQuery(company?.id);

	const options = useOptionsTeachersRating({ data: teachers?.data });

	return (
		<UiCard
			title={"Учителя"}
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
					minHeight: teachers?.data.length ? `${teachers?.data.length * 6}vh` : "auto",
				}}
				loadingOption={{
					text: "Загрузка"
				}}
			/>
		</UiCard>
	);
};

export { ChartTeachersRating };
