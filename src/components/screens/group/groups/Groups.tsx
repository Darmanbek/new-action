import { FC } from "react";

import { FormGroups } from "./form/FormGroups";
import { TableGroups } from "./table/TableGroups";

const Groups: FC = () => {
	return (
		<>
			<FormGroups />
			<TableGroups />
		</>
	);
};

export { Groups };
