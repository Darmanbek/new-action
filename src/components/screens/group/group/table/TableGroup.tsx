import { Tabs } from "antd";
import { FC } from "react";
import { Students } from "./students/Students";
import { Lessons } from "./lessons/Lessons";

const TableGroup: FC = () => {
	return (
		<>
			<Tabs
				tabBarStyle={{
					marginBottom: 0
				}}
				type={"card"}
				items={[
					{
						key: "students",
						label: "Студенты",
						children: <Students />
					},
					{
						key: "lessons",
						label: "Уроки",
						children: <Lessons />
					}
				]}
			/>

		</>
	);
};

export { TableGroup };
