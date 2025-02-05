import { type FC } from "react"
import { FormStudents } from "./form/FormStudents"
import { TableStudents } from "./table/TableStudents"

const Students: FC = () => {
	return (
		<>
			<FormStudents />
			<TableStudents />
		</>
	)
}

export default Students
