import { FC } from "react";
import StudentsRating from "src/components/screens/dashboard/students-rating/StudentsRating";
import TeachersRating from "src/components/screens/dashboard/teachers-rating/TeachersRating";
import { UiTabs } from "src/components/ui";

const Rating: FC = () => {
	return (
		<UiTabs
			items={[
				{
					key: "/teachers",
					label: "Учителя",
					children: <TeachersRating />,
				},
				{
					key: "/students",
					label: "Студенты",
					children: <StudentsRating />,
				},
			]}
		/>
	);
};

export default Rating;
