import { FC } from "react";

import { FormGroup } from "./form/FormGroup";
import { TableGroup } from "./table/TableGroup";

const Group: FC = () => {
	return (
		<>
			<FormGroup />
			<TableGroup />
		</>
	);
};

export { Group };
