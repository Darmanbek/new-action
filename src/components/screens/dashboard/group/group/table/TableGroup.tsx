import { FC } from "react";
import { UiTabs } from "src/components/ui";
import { TableAssessments } from "./assessments/TableAssessments";
import { TableStudents } from "./students/TableStudents";

const TableGroup: FC = () => {
	return (
		<>
			<UiTabs
				items={[
					{
						key: "assessments",
						label: "Посещаемость",
						children: <TableAssessments />,
					},
					{
						key: "students",
						label: "Студенты",
						children: <TableStudents />,
					},
				]}
			/>
		</>
	);
};

export { TableGroup };
