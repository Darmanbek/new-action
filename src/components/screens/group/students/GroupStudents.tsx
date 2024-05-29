import { FC } from "react";

import { FormGroupStudents } from "./form/FormGroupStudents";
import { TableGroupStudents } from "./table/TableGroupStudents";

const GroupStudents: FC = () => {
	return (
		<>
			<FormGroupStudents />
			<TableGroupStudents />
		</>
	);
};

export { GroupStudents };
