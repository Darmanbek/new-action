import { FC } from "react"
import { DescriptionGroup } from "./description/DescriptionGroup"
import { FormGroupStudent } from "./form/FormGroupStudent"
import { TableGroup } from "./table/TableGroup"

const Group: FC = () => {
	return (
		<>
			<FormGroupStudent />
			<DescriptionGroup />
			<TableGroup />
		</>
	)
}

export default Group
