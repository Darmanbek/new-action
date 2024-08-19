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
		date: [date.startOf("month").format("YYYY-MM-DD"), date.endOf("month").format("YYYY-MM-DD")]
	}, group_id);

	const columns: ColumnsType<TGroupAssessment> = calendar?.data.map(date => ({
		align: "center",
		ellipsis: true,
		title: `${dayjs(date).get("date")} ${dayjs(date).format("MMM")}`,
		key: date,
		// onHeaderCell: () => ({
		// 	style: {
		// 		backgroundColor: "rgba(255, 0, 0, 0.3)"
		// 	}
		// }),
		// onCell: (data) => ({
		// 	style: {
		//
		// 	}
		// }),
		render: (_v, r) => {
			const is_available = r.assessments.find(el => el.date === date)?.is_available;
			if (is_available === undefined) return "";
			return (
				<ApproveCheckValue
					isValue={is_available}
					yesText={"Был"}
					noText={"Нет"}
				/>
			);
		}
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
