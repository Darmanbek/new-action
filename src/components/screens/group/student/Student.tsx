import { FC } from "react";
import { FormStudent } from "./form/FormStudent";
import { DescriptionStudent } from "./description/DescriptionStudent";
import { TableStudent } from "./table/TableStudent";

const Student: FC = () => {
	return (
		<>
			<FormStudent />
			<DescriptionStudent />
			<TableStudent />
		</>
	);
};

export default Student;
