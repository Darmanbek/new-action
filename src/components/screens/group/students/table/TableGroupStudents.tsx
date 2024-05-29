import { Tooltip } from "antd";
import { FC } from "react";
import { HeadTable } from "src/components/shared";
import { UiButton, UiTable } from "src/components/ui";
import { useGetGroupsByIdQuery } from "src/services";
import { useFormStorageStore } from "src/store";
import { useColumnsGroupStudents } from "./useColumnsGroupStudents";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const TableGroupStudents: FC = () => {
	const { group_id } = useParams();
	const navigate = useNavigate();
	const {
		data: group,
		isLoading,
		isFetching,
	} = useGetGroupsByIdQuery(group_id);

	const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer);

	const columns = useColumnsGroupStudents();

	return (
		<UiTable
			title={() => (
				<HeadTable
					title="Студенты"
					children={[
						<Tooltip title="Добавить" key="Add">
							<UiButton
								key="Add_Button"
								type="primary"
								icon={<AiOutlinePlus />}
								onClick={toggleDrawer}
							/>
						</Tooltip>,
						<Tooltip title="Назад" key="Back">
							<UiButton
								key="Add_Button"
								type="primary"
								icon={<BiArrowBack />}
								onClick={() => navigate(-1)}
							/>
						</Tooltip>,
					]}
				/>
			)}
			dataSource={group?.data.students}
			columns={columns}
			loading={isLoading || isFetching}
		/>
	);
};

export { TableGroupStudents };
