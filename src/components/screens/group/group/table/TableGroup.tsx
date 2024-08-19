import { Tabs } from "antd";
import { FC } from "react";
import { TableStudents } from "./students/TableStudents";
import { TableAssessments } from "./assessments/TableAssessments";

const TableGroup: FC = () => {
	return (
		<>
			<Tabs
				tabBarStyle={{
					marginBottom: 0
				}}
				type={"card"}
				animated={true}
				items={[
					{
						key: "assessments",
						label: "Посещаемость",
						children: <TableAssessments />
					},
					{
						key: "students",
						label: "Студенты",
						children: <TableStudents />
					},
				]}
			/>

		</>
	);
};

export { TableGroup };
