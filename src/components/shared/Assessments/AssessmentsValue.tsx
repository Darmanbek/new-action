import { FC } from "react";
import { TAssessment } from "src/services/index.types";

interface AssessmentsValueProps {
	date: string;
	assessments: TAssessment[];
}

const AssessmentsValue: FC<AssessmentsValueProps> = ({ date, assessments }) => {
	const currentAssessments = assessments.find(el => el.date === date);
	if (!currentAssessments) return "";

	return currentAssessments.value;
};

export { AssessmentsValue };
