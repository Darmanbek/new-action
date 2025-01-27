import type { FC } from "react"
import { FormStories } from "./form/FormStories"
import { TableStories } from "./table/TableStories"

const Stories: FC = () => {
	return (
		<>
			<FormStories />
			<TableStories />
		</>
	)
}

export default Stories
