import { FC } from "react"
import { FormAdmins } from "./form/FormAdmins"
import { TableAdmins } from "./table/TableAdmins"

const Admins: FC = () => {
	return (
		<>
			<FormAdmins />
			<TableAdmins />
		</>
	)
}

export default Admins
