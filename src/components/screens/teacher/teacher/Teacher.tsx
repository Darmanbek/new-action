import { FC } from "react";
import { FormTeachers } from "src/components/screens/teacher/teachers/form/FormTeachers";
import { DescriptionTeacher } from "./description/DescriptionTeacher";
import { TableTeacher } from "./table/TableTeacher";

const Teacher: FC = () => {
	return (
		<>
			<FormTeachers />
			<DescriptionTeacher />
			<TableTeacher />
		</>
	);
};

export default Teacher;
