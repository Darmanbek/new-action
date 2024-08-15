import { FormGroups } from "./form/FormGroups";
import { TableGroups } from "./table/TableGroups";
import { FC } from "react";

const Groups: FC = () => {
	return (
		<>
			<FormGroups />
			<TableGroups />
		</>
	);
};

export default Groups;
