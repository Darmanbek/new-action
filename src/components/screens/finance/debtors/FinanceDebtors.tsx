import { FC } from "react";
import { FormFinanceDebtors } from "./form/FormFinanceDebtors";
import { TableFinanceDebtors } from "./table/TableFinanceDebtors";

const FinanceDebtors: FC = () => {
	return (
		<>
			<FormFinanceDebtors />
			<TableFinanceDebtors />
		</>
	);
};

export default FinanceDebtors;
