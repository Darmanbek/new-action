import { useNavigate, useParams } from "react-router-dom";
import { HeadTable } from "src/components/shared";
import { UiTable } from "src/components/ui";
import { useGetDashboardCompaniesGroupsByIdQuery } from "src/services/index.api";
import { TStudent } from "src/services/shared/shared.types";
import { useColumnsStudents } from "./useColumnsStudents";

export const TableStudents = () => {
	const { group_id } = useParams();
	const navigate = useNavigate();

	const {
		data: group,
		isLoading,
		isFetching,
	} = useGetDashboardCompaniesGroupsByIdQuery(group_id);


	const columns = useColumnsStudents();

	return (
		<UiTable<TStudent>
			title={() => (
				<HeadTable
					title={"Студенты"}
				/>
			)}
			onRow={(data) => ({
				onClick: () => navigate(`students/${data.id}`),
			})}
			dataSource={group?.data?.students}
			columns={columns}
			loading={isLoading || isFetching}
			pagination={false}
		/>
	);
};
