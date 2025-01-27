import type { FC } from "react"
import type { TAssessment } from "src/services/shared"

interface AssessmentsValueProps {
	date: string
	assessments: TAssessment[]
}

const AssessmentsValue: FC<AssessmentsValueProps> = ({ date, assessments }) => {
	const currentAssessments = assessments.find((el) => el.date === date)
	if (!currentAssessments) return ""

	return currentAssessments.value
}

export { AssessmentsValue }
