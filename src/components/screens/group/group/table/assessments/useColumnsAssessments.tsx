import { ColumnsType } from "antd/es/table";
import dayjs, { Dayjs } from "dayjs";
import { useParams } from "react-router-dom";
import { ApproveCheckValue } from "src/components/shared";
import { useGetGroupsByIdCalendarQuery } from "src/services/groups/groups.api";
import { TGroupAssessment } from "src/services/groups/groups.types";

export const useColumnsAssessments = (date: Dayjs) => {
	const { group_id } = useParams();

	const {
		data: calendar,
	} = useGetGroupsByIdCalendarQuery({
		date: [date.startOf("month").format("YYYY-MM-DD"), date.endOf("month").format("YYYY-MM-DD")],
	}, group_id);

	const columns: ColumnsType<TGroupAssessment> = calendar?.data.map(date => ({
		align: "center",
		ellipsis: true,
		title: `${dayjs(date).get("date")} ${dayjs(date).format("MMM")}`,
		key: date,
		// onHeaderCell: () => ({}),
		// onCell: (data) => ({}),

		render: (_v, r) => {
			const assessments = r.assessments.find(el => el.date === date);
			if (!assessments) return "";
			if (assessments.holiday) return "";

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
		render: (_v, student) => `${student?.first_name} ${student?.last_name}`,
	});

	return columns;
};
