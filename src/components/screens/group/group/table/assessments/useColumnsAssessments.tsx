import { Divider, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import dayjs, { Dayjs } from "dayjs";
import { Link, useParams } from "react-router-dom";
import { ApproveCheckValue } from "src/components/shared";
import { useGetGroupsByIdCalendarQuery, useGetGroupsByIdLessonsQuery } from "src/services/index.api";
import { TGroupAssessment } from "src/services/groups/groups.types";

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

	const columns: ColumnsType<TGroupAssessment> = calendar?.data.map(date => ({
		align: "center",
		ellipsis: true,
		title: () => {
			const lesson = lessons?.data.find(el => dayjs(el.date).format("YYYY-MM-DD") === dayjs(date).format("YYYY-MM-DD"));
			const value =
				lesson ?
					lesson.is_holiday ?
						"Выходной" : lesson.is_exam ?
							"Экзамен" : lesson.is_free ?
								"Бесплатно" : lesson.title ?
									lesson.title :
									"Урок" :
					"";

			return (
				<Space direction={"vertical"}>
					<span>
						{`${dayjs(date).get("date")} ${dayjs(date).format("MMM")}`}
					</span>
					<Divider style={{ margin: 0 }} />
					<span>
						{value}
					</span>
				</Space>
			);
		},
		key: date,
		onHeaderCell: () => {
			const lesson = lessons?.data.find(el => dayjs(el.date).format("YYYY-MM-DD") === dayjs(date).format("YYYY-MM-DD"));
			if (!lesson) return {};

			const color = lesson.is_holiday ?
				"rgba(255, 0, 0, 0.4)" : lesson.is_exam ?
					"rgba(0, 255, 0, 0.4)" : lesson.is_free ?
						"rgba(0, 0, 255, 0.4)" : "transparent";

			return ({
				style: {
					backgroundColor: color,
					// borderInline: "1px solid #f0f0f0",
					// borderRadius: 8,
				},
			});
		},
		onCell: () => {
			const lesson = lessons?.data.find(el => dayjs(el.date).format("YYYY-MM-DD") === dayjs(date).format("YYYY-MM-DD"));
			if (!lesson) return {};

			const color = lesson.is_holiday ?
				"rgba(255, 0, 0, 0.4)" : lesson.is_exam ?
					"rgba(0, 255, 0, 0.4)" : lesson.is_free ?
						"rgba(0, 0, 255, 0.4)" : "transparent";

			return ({
				style: {
					backgroundColor: color,
					// borderInline: "1px solid #f0f0f0",
					// borderRadius: 8,
				},
			});
		},

		render: (_v, r) => {
			const assessments = r.assessments.find(el => el.date === date);
			if (!assessments) return "";

			if (assessments.is_available) return assessments.value;

			if (assessments.consented) return (
				<ApproveCheckValue
					colorInverse={true}
					isValue={assessments.is_available}
					yesText={"Был"}
					noText={"Нет с причиной"}
				/>
			);

			return (
				<ApproveCheckValue
					colorInverse={true}
					isValue={assessments.is_available}
					yesText={"Был"}
					noText={"Нет"}
				/>
			);
		},
	})) || [];

	columns.unshift({
		ellipsis: true,
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
