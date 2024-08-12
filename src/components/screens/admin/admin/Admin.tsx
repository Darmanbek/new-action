import { FC } from "react";
import { FormAdmin } from "./form/FormAdmin";
import { TableAdmin } from "./table/TableAdmin";

const Admin: FC = () => {
	return (
		<>
			<FormAdmin />
			<TableAdmin />
		</>
	);
};

export default Admin;
