import { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { HeadTable } from "src/components/shared";
import { UiTable } from "src/components/ui";
import { useGetGroupsByIdQuery } from "src/services/groups/groups.api";

const TableAssessments: FC = () => {
	const { group_id } = useParams();
	const {
		data: group,
		isLoading,
		isFetching,
	} = useGetGroupsByIdQuery(group_id);

	const columns: ColumnsType = group?.data.students[0].assessments.map(el => ({
		title: dayjs(el.date).format("YYYY-MM-DD"),
		key: el.date,
	})) || [];

	columns?.unshift({
		title: "Студент",
		key: "student",
		render: (student: any) => `${student?.first_name} ${student?.last_name}`,
	});

	return (
		<UiTable
			title={() => (
				<HeadTable
					title={"Посещаемость"}
				/>
			)}
			columns={columns}
			dataSource={group?.data.students}
			loading={isLoading || isFetching}
		/>
	);
};

export { TableAssessments };
