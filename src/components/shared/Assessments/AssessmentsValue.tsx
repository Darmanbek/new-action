import { FC } from "react";
import { ApproveCheckValue } from "src/components/shared";
import { TAssessment } from "src/services/index.types";

interface AssessmentsValueProps {
	date: string;
	assessments: TAssessment[];
}

const AssessmentsValue: FC<AssessmentsValueProps> = ({ date, assessments }) => {
	const currentAssessments = assessments.find(el => el.date === date);
	if (!currentAssessments) return "";

	if (currentAssessments.is_available) return currentAssessments.value;

	return (
		<ApproveCheckValue
			colorInverse={true}
			isValue={currentAssessments.is_available}
			yesText={"Был"}
			noText={currentAssessments.consented ? "Нет с причиной" : "Нет"}
		/>
	);
};

export { AssessmentsValue };
