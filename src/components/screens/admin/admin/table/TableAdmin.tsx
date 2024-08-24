import { HeadTable } from "src/components/shared";
import { UiTable, UiTooltipButton } from "src/components/ui";
import { TAdmin } from "src/services/index.types";
import { useGetAdminsQuery } from "src/services/index.api";
import { useFormStorageStore } from "src/store";
import { useColumnsAdmin } from "./useColumnsAdmin";
import { PlusOutlined } from "@ant-design/icons";

export const TableAdmin = () => {
	const { data: admins, isLoading, isFetching } = useGetAdminsQuery();
	const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer);
	const columns = useColumnsAdmin();

	return (
		<UiTable<TAdmin>
			title={() => (
				<HeadTable
					title="Админы"
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
			dataSource={admins?.data}
			columns={columns}
			loading={isLoading || isFetching}
		/>
	);
};
