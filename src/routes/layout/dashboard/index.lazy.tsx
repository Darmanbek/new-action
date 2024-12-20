import { StudentsRating } from "./students-rating/StudentsRating";
import { TeachersRating } from "./teachers-rating/TeachersRating";

export default function Dashboard() {
	return (
		<>
			<StudentsRating />
			<TeachersRating />
		</>
	);
}
