import { FC } from "react";
import { DescriptionStudent } from "./description/DescriptionStudent";
import { TableStudent } from "./table/TableStudent";

const Student: FC = () => {
	return (
		<>
			<DescriptionStudent />
			<TableStudent />
		</>
	);
};

export default Student;
