import { FC } from "react";
import { TableTeacher } from "./table/TableTeacher";
import { FormTeacher } from "./form/FormTeacher";

const Teacher: FC = () => {
	return (
		<>
			<FormTeacher />
			<TableTeacher />
		</>
	);
};

export default Teacher;
