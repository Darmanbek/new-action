import { PlusOutlined } from "@ant-design/icons";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { HeadTable } from "src/components/shared";
import { TTransaction } from "src/services/index.types";
import { useFormStorageStore } from "src/store";
import { useColumnsTransactions } from "./useColumnsTransactions";
import { UiTable, UiTooltipButton } from "src/components/ui";
import { useGetGroupsByIdStudentsQuery } from "src/services/index.api";

const TableTransactions: FC = () => {
	const { group_id, student_id } = useParams();

	const columns = useColumnsTransactions();

	const { data: students, isLoading, isFetching } = useGetGroupsByIdStudentsQuery(group_id);


	const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer);

	return (
		<UiTable<TTransaction>
			title={() => (
				<HeadTable
					title={"Транзакции"}
					children={[
						<UiTooltipButton
							title="Добавить"
							key="Add_Button"
							type="primary"
							icon={<PlusOutlined />}
							onClick={toggleDrawer}
						>
							Добавить
						</UiTooltipButton>,
					]}
				/>
			)}
			dataSource={
				students?.data?.find((el) => el.id === student_id)
					?.transactions
			}
			columns={columns}
			loading={isLoading || isFetching}
		/>
	);
};

export { TableTransactions };
