import { useNavigate, useParams } from "react-router-dom";
import { HeadTable } from "src/components/shared";
import { UiTable } from "src/components/ui";
import { useGetTeachersByIdQuery } from "src/services/index.api";
import { TGroup } from "src/services/index.types";
import { useColumnsGroups } from "./useColumnsGroups";

const TableGroups = () => {
	const navigate = useNavigate();
	const { teacher_id } = useParams();
	const {
		data: teacher,
		isLoading,
		isFetching,
	} = useGetTeachersByIdQuery(teacher_id);
	const columns = useColumnsGroups();

	return (
		<UiTable<TGroup>
			title={() => (
				<HeadTable
					title="Группы"
				/>
			)}
			onRow={(data) => ({
				onClick: () => navigate(`/groups/${data.id}`),
			})}
			dataSource={teacher?.data.groups}
			columns={columns}
			loading={isLoading || isFetching}
		/>
	);
};

export { TableGroups };
