import { FC } from "react"
import { FormCompanies } from "./form/FormCompanies"
import { TableCompanies } from "./table/TableCompanies"

const Companies: FC = () => {
	return (
		<>
			<FormCompanies />
			<TableCompanies />
		</>
	)
}

export default Companies
