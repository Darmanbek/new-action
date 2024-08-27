import { ColumnsType } from "antd/es/table";
import { HeadTable } from "src/components/shared";
import { UiTable, UiTooltipButton } from "src/components/ui";
import { useGetCompaniesQuery } from "src/services/index.api";
import { useFormStorageStore } from "src/store";
import { PlusOutlined } from "@ant-design/icons";

import { useColumnsCompany } from "./useColumnsCompany";

export const TableCompany = () => {
	const { data: companies, isLoading, isFetching } = useGetCompaniesQuery();
	const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer);
	const columns = useColumnsCompany();

	return (
		<UiTable
			title={() => (
				<HeadTable
					title="Филиалы"
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
			dataSource={companies?.data}
			columns={columns as ColumnsType}
			loading={isLoading || isFetching}
		/>
	);
};
