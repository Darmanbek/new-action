import { Tooltip } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { HeadTable } from "src/components/shared";
import { UiButton, UiTable } from "src/components/ui";
import { useGetGroupsByIdStudentsQuery } from "src/services/index.api";
import { TStudent } from "src/services/shared/shared.types";
import { useColumnsStudents } from "./useColumnsStudents";

export const TableStudents = () => {
	const { group_id } = useParams();
	const navigate = useNavigate();
	const {
		data: students,
		isLoading,
		isFetching,
	} = useGetGroupsByIdStudentsQuery(group_id);
	const columns = useColumnsStudents();

	return (
		<UiTable<TStudent>
			title={() => (
				<HeadTable
					title={"Студенты"}
					children={[
						<Tooltip title="Назад" key="Back">
							<UiButton
								key="Back_Button"
								type="primary"
								icon={<ArrowLeftOutlined />}
								onClick={() => navigate(-1)}
							/>
						</Tooltip>,
					]}
				/>
			)}
			dataSource={students?.data}
			onRow={(data) => ({
				onClick: () => navigate(`students/${data.id}`)
			})}
			columns={columns}
			loading={isLoading || isFetching}
		/>
	);
};
