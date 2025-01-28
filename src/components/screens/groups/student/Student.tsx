import { FC } from "react"
import { useAuth } from "src/hooks"
import { DescriptionStudent } from "./description/DescriptionStudent"
import { FormStudent } from "./form/FormStudent"
import { TableStudent } from "./table/TableStudent"

const Student: FC = () => {
	const { isDirector } = useAuth()
	return (
		<>
			{!isDirector && <FormStudent />}
			<DescriptionStudent />
			<TableStudent />
		</>
	)
}

export default Student
