import { ColumnsType } from "antd/es/table";
import { Dayjs } from "dayjs";
import { Link, useParams } from "react-router-dom";
import { AssessmentsTitle, AssessmentsValue } from "src/components/shared";
import {
	useGetGroupsByIdCalendarQuery,
	useGetGroupsByIdLessonsQuery,
	useGetHolidayQuery,
} from "src/services/index.api";
import { TGroupAssessment } from "src/services/groups/groups.types";
import { dateFormatter } from "src/utils";

export const useColumnsAssessments = (date: Dayjs) => {
	const { group_id } = useParams();

	const {
		data: calendar,
	} = useGetGroupsByIdCalendarQuery({
		date: [date.startOf("month").format("YYYY-MM-DD"), date.endOf("month").format("YYYY-MM-DD")],
	}, group_id);
	const {
		data: lessons,
	} = useGetGroupsByIdLessonsQuery(group_id);

	const { data: holiday } = useGetHolidayQuery({
		date: [date.startOf("month").format("YYYY-MM-DD"), date.endOf("month").format("YYYY-MM-DD")],
	});

	const columns: ColumnsType<TGroupAssessment> = calendar?.data.map(date => ({
		align: "center",
		ellipsis: true,
		title: () => <AssessmentsTitle date={date} holiday={holiday?.data} lessons={lessons?.data} />,
		key: date,
		onHeaderCell: () => {
			const lesson = lessons?.data.find(el => dateFormatter(el.date) === dateFormatter(date));

			const isHoliday = holiday?.data.some(el => dateFormatter(el.date) === dateFormatter(date)) ?? false;

			const getValue = () => {
				if (lesson) {
					if (lesson.is_exam) {
						return {
							backgroundColor: "#fff1f0",
							color: "#cf1322",
						};
					}
					if (lesson.is_free) {
						return {
							backgroundColor: "#fff1f0",
							color: "#cf1322",
						};
					}
				}
				if (isHoliday) {
					return {
						backgroundColor: "#f6ffed",
						color: "#389e0d",
					};
				}
				return {};
			};

			const style = getValue();

			return ({
				style,
			});
		},
		onCell: () => {
			const lesson = lessons?.data.find(el => dateFormatter(el.date) === dateFormatter(date));

			const isHoliday = !!holiday?.data.find(el => dateFormatter(el.date) === dateFormatter(date));

			const getValue = () => {
				if (lesson) {
					if (lesson.is_exam) {
						return {
							backgroundColor: "#fff1f0",
							color: "#cf1322",
						};
					}
					if (lesson.is_free) {
						return {
							backgroundColor: "#e6f4ff",
							color: "#0958d9",
						};
					}
				}
				if (isHoliday) {
					return {
						backgroundColor: "#f6ffed",
						color: "#389e0d",
					};
				}
				return {};
			};

			const style = getValue();

			return ({
				style,
			});
		},

		render: (_v, assessment) => <AssessmentsValue date={date} assessments={assessment.assessments} />,
	})) || [];

	columns.unshift({
		ellipsis: true,
		fixed: "left",
		// rowScope: "row",
		title: "Студент",
		key: "student",
		render: (_v, student) => (
			<Link to={`/groups/${group_id}/students/${student.id}`}>
				{`${student?.first_name} ${student?.last_name}`}
			</Link>
		),
	});

	return columns;
};
