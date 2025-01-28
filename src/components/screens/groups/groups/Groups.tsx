import { FC } from "react"
import { useAuth } from "src/hooks"
import { FormGroups } from "./form/FormGroups"
import { TableGroups } from "./table/TableGroups"

const Groups: FC = () => {
	const { isDirector } = useAuth()

	return (
		<>
			{!isDirector && <FormGroups />}
			<TableGroups />
		</>
	)
}

export default Groups
