import { FC } from "react";
import { FormCompany } from "src/components/screens/company/company/form/FormCompany.tsx";
import { TableCompany } from "src/components/screens/company/company/table/TableCompany.tsx";

const Company: FC = () => {
	return (
		<>
			<FormCompany />
			<TableCompany />
		</>
	);
};

export default Company;
