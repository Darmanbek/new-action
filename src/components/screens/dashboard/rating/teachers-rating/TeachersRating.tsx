import { FC } from "react";
import { UiTabs } from "src/components/ui";
import { ChartTeachersRating } from "./chart/ChartTeachersRating";
import { TableTeachersRating } from "./table/TableTeachersRating";

const TeachersRating: FC = () => {
	return (
			<UiTabs
				items={[
					{
						key: "/teachers-chart",
						label: "График",
						children: <ChartTeachersRating />,
					},
					{
						key: "/teachers-table",
						label: "Таблица",
						children: <TableTeachersRating />,
					},
				]}
			/>

	);
};

export { TeachersRating };
