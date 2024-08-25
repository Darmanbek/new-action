import { useParams } from "react-router-dom";
import { HeadTable } from "src/components/shared";
import { UiTable } from "src/components/ui";
import {
	useGetDashboardCompaniesByIdQuery,
} from "src/services/index.api";
import { TStudent } from "src/services/shared/shared.types";
import { useAuthPersistStore } from "src/store";
import { useColumnsStudents } from "./useColumnsStudents";

export const TableStudents = () => {
	const currentCompany = useAuthPersistStore(
		state => state.company,
	);
	const { group_id } = useParams();

	const {
		data: company,
		isLoading,
		isFetching,
	} = useGetDashboardCompaniesByIdQuery({}, currentCompany?.id);

	const group = company?.data.groups.find(el => el.id === group_id);


	const columns = useColumnsStudents();

	return (
		<UiTable<TStudent>
			title={() => (
				<HeadTable
					title={"Студенты"}
				/>
			)}
			dataSource={group?.students}
			columns={columns}
			loading={isLoading || isFetching}
			pagination={false}
		/>
	);
};
