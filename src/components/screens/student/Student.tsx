import { FC } from "react";

import { TableStudent } from "./table/TableStudent";
import { FormStudent } from "./form/FormStudent";

const Student: FC = () => {
	return (
		<>
			<FormStudent />
			<TableStudent />
		</>
	);
};

export { Student };
