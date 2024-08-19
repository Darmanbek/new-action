import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { FC, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { HeadTable } from "src/components/shared";
import { UiDatePicker, UiTable } from "src/components/ui";
import { TGroupAssessment } from "src/services/groups/groups.types";
import { useGetGroupsByIdAssessmentsQuery, useGetGroupsByIdQuery } from "src/services/index.api";

import { useColumnsAssessments } from "./useColumnsAssessments";

dayjs.extend(isBetween);

const TableAssessments: FC = () => {
	const { group_id } = useParams();
	const {
		data: assessment,
		isLoading,
		isFetching,
	} = useGetGroupsByIdAssessmentsQuery(group_id);

	const {
		data: group,
	} = useGetGroupsByIdQuery(group_id);


	const [date, setDate] = useState(dayjs());
	const [start, end] = useMemo(() => {
		if (!group) return [dayjs(), dayjs()];
		const startDate = dayjs(group?.data.start_date);
		const endDate = dayjs(group?.data.start_date).endOf("month").add(group?.data?.duration, "month");

		return [startDate, endDate];
	}, [group]);

	const columns = useColumnsAssessments(date);

	return (
		<UiTable<TGroupAssessment>
			title={() => (
				<HeadTable
					title={"Посещаемость"}
					children={[
						<UiDatePicker
							key={"Date"}
							picker={"month"}
							value={date}
							onChange={(date) => {
								setDate(date);
							}}
							format={"YYYY MMMM"}
							disabledDate={(date) => {
								return !dayjs(date).isBetween(start, end);
							}}
							allowClear={false}
						/>
					]}
				/>
			)}
			columns={columns}
			dataSource={assessment?.data}
			loading={isLoading || isFetching}
		/>
	);
};

export { TableAssessments };
