import { FC } from "react"
import { StudentsRating } from "./students-rating/StudentsRating"
import { TeachersRating } from "./teachers-rating/TeachersRating"

const Dashboard: FC = () => {
	return (
		<>
			<StudentsRating />
			<TeachersRating />
		</>
	)
}

export default Dashboard
