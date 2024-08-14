import { FC } from "react";
import { FormHoliday } from "./form/FormHoliday";
import { TableHoliday } from "./table/TableHoliday";

const Holiday: FC = () => {
	return (
		<>
			<FormHoliday />
			<TableHoliday />
		</>
	);
};

export default Holiday;
