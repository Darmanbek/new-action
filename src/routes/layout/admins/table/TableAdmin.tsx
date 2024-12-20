import { HeadTable } from "src/components/shared";
import { UiTable, UiTooltipButton } from "src/components/ui";
import { TAdmin } from "src/services/index.types";
import {
	useGetAdminsQuery,
	useGetDashboardAdminsQuery
} from "src/services/index.api";
import { useAuthPersistStore, useFormStorageStore } from "src/store";
import { useColumnsAdmin } from "./useColumnsAdmin";
import { PlusOutlined } from "@ant-design/icons";

export const TableAdmin = () => {
	const role = useAuthPersistStore(
		state => state.role
	);
	
	const useCustomGerAdmins = role === "director" ? useGetDashboardAdminsQuery : useGetAdminsQuery;
	
	const { data: admins, isLoading, isFetching } = useCustomGerAdmins();
	const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer);
	const columns = useColumnsAdmin();
	
	return (
		<UiTable<TAdmin>
			title={() => (
				<HeadTable
					title={"Админы"}
					children={role === "director" ? [] : [
						<UiTooltipButton
							title={"Добавить"}
							key={"Add_Button"}
							type={"primary"}
							icon={<PlusOutlined />}
							onClick={toggleDrawer}
						>
							Добавить
						</UiTooltipButton>,
					]}
				/>
			)}
			dataSource={admins?.data}
			columns={columns.filter(column => role === "director" ? column.key !== "actions" : column)}
			loading={isLoading || isFetching}
		/>
	);
};
