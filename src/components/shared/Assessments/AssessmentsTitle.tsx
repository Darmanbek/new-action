import { Divider, Space, Tooltip } from "antd";
import { FC } from "react";
import { THoliday } from "src/services/holiday/holiday.types";
import { TLesson } from "src/services/shared/shared.types";
import { dateFormatter } from "src/utils";

interface AssessmentsTitleProps {
	date: string;
	lessons?: TLesson[];
	holiday?: THoliday[];
}

const AssessmentsTitle: FC<AssessmentsTitleProps> = ({ date, lessons, holiday }) => {
	const lesson = lessons?.find(el => dateFormatter(el.date) === dateFormatter(date));

	const isHoliday = holiday?.some(el => dateFormatter(el.date) === dateFormatter(date)) ?? false;

	const getAssessmentValue = () => {
		if (lesson) {
			if (lesson?.is_exam) {
				return "Экзамен";
			}
			if (lesson?.is_free && lesson?.title) {
				return (
					<Tooltip title={"Бесплатно"}>
						{lesson?.title}
					</Tooltip>
				);
			}
			if (lesson?.title) {
				return lesson.title;
			}
		}
		if (isHoliday) {
			return "Выходной";
		}
		return "";
	};

	const value = getAssessmentValue();

	return (
		<Space direction={"vertical"}>
			<span>
				{dateFormatter(date, "D MMM")}
			</span>
			<Divider style={{ margin: 0 }} />
			<span>
				{value}
			</span>
		</Space>
	);
};

export { AssessmentsTitle };
