import { FC } from "react"
import { DescriptionGroup } from "./description/DescriptionGroup"
import { TableGroup } from "./table/TableGroup"

const Group: FC = () => {
	return (
		<>
			<DescriptionGroup />
			<TableGroup />
		</>
	)
}

export default Group
