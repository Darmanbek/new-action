import { FC } from "react";
import { StudentsRating } from "./students-rating/StudentsRating";
import { TeachersRating } from "./teachers-rating/TeachersRating";

const Rating: FC = () => {
	return (
		<>
			<StudentsRating />
			<TeachersRating />
		</>
	);
};

export default Rating;
