import { FC } from "react";

import { FormGroupLessons } from "./form/FormGroupLessons";
import { TableGroupLessons } from "./table/TableGroupLessons";

const GroupLessons: FC = () => {
	return (
		<>
			<FormGroupLessons />
			<TableGroupLessons />
		</>
	);
};

export { GroupLessons };
