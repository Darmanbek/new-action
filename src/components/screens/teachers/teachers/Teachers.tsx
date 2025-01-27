import { FC } from "react"
import { TableTeachers } from "./table/TableTeachers"
import { FormTeachers } from "./form/FormTeachers"

const Teachers: FC = () => {
	return (
		<>
			<FormTeachers />
			<TableTeachers />
		</>
	)
}

export default Teachers
