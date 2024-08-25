import { FC } from "react";
import { UiTabs } from "src/components/ui";
import { TableAssessments } from "./assessments/TableAssessments";
import { TableTransactions } from "./transactions/TableTransactions";
import { TablePayments } from "./payments/TablePayments";

const TableStudent: FC = () => {
	return (
		<>
			<UiTabs
				items={[
					{
						key: "transactions",
						label: "Транзакции",
						children: <TableTransactions />,
					},
					{
						key: "assessments",
						label: "Посещаемость",
						children: <TableAssessments />,
					},
					{
						key: "payments",
						label: "История платежи",
						children: <TablePayments />,
					},
				]}
			/>
		</>
	);
};

export { TableStudent };
