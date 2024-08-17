import { Tabs } from "antd";
import { FC } from "react";
import { TableAssessments } from "src/components/screens/group/student/table/assessments/TableAssessments";
import { TableTransactions } from "./transactions/TableTransactions";
import { TablePayments } from "./payments/TablePayments";

const TableStudent: FC = () => {
	return (
		<>
			<Tabs
				tabBarStyle={{
					marginBottom: 0
				}}
				type={"card"}
				items={[
					{
						key: "transactions",
						label: "Транзакции",
						children: <TableTransactions />
					},
					{
						key: "assessments",
						label: "Посещаемость",
						children: <TableAssessments />
					},
					{
						key: "payments",
						label: "История платежи",
						children: <TablePayments />
					},
				]}
			/>
		</>
	);
};

export { TableStudent };
