import { Tooltip } from "antd";
import { FC } from "react";
// import { BiArrowBack, BiPlus, BiSolidEditAlt } from "react-icons/bi";
import { HeadTable } from "src/components/shared";
import { UiButton, UiTable } from "src/components/ui";
import { useGetGroupsByIdQuery } from "src/services";
import { useFormStorageStore } from "src/store";
import { useColumnsGroup } from "./useColumnsGroup";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const TableGroup: FC = () => {
	const { group_id } = useParams();
	const navigate = useNavigate();
	const {
		data: group,
		isLoading,
		isFetching,
	} = useGetGroupsByIdQuery(group_id);

	const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer);

	const { columnsStudents, columnsLessons } = useColumnsGroup();

	return (
		<>
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
				columns={columnsStudents}
				loading={isLoading || isFetching}
			/>

			<UiTable
				title={() => (
					<HeadTable
						title="Задания"
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
				dataSource={group?.data.lessons}
				columns={columnsLessons}
				loading={isLoading || isFetching}
			/>
		</>
	);
};

export { TableGroup };
