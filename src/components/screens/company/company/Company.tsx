import { FC } from "react";
import { FormCompany } from "./form/FormCompany";
import { TableCompany } from "./table/TableCompany";

const Company: FC = () => {
	return (
		<>
			<FormCompany />
			<TableCompany />
		</>
	);
};

export default Company;
