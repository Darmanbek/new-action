import type { FC } from "react";
import { FormStory } from "./form/FormStory";
import { TableStory } from "./table/TableStory";

const Story: FC = () => {
	return (
		<>
			<FormStory />
			<TableStory />
		</>
	);
};

export default Story;
