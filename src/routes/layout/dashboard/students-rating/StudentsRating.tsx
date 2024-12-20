import { FC } from "react";
import { UiTabs } from "src/components/ui";
import { ChartStudentsRating } from "./chart/ChartStudentsRating";
import { TableStudentsRating } from "./table/TableStudentsRating";

const StudentsRating: FC = () => {
	return (
		<UiTabs
			items={[
				{
					key: "/students-chart",
					label: "График",
					children: <ChartStudentsRating />,
				},
				{
					key: "/students-table",
					label: "Таблица",
					children: <TableStudentsRating />,
				},
			]}
		/>
	);
};

export { StudentsRating };
