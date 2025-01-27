import { PlusOutlined } from "@ant-design/icons"
import type { ColumnsType } from "antd/es/table"
import { HeadTable } from "src/components/shared"
import { UiTable, UiTooltipButton } from "src/components/ui"
import { useGetCompaniesQuery } from "src/services/companies"
import { useFormStorageStore } from "src/store"
import { useColumnsCompanies } from "./useColumnsCompanies"

export const TableCompanies = () => {
	const { data: companies, isLoading, isFetching } = useGetCompaniesQuery()
	const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer)
	const columns = useColumnsCompanies()

	return (
		<UiTable
			title={() => (
				<HeadTable
					title={"Филиалы"}
					children={[
						<UiTooltipButton
							title={"Добавить"}
							key={"Add_Button"}
							type={"primary"}
							icon={<PlusOutlined />}
							onClick={toggleDrawer}
						>
							Добавить
						</UiTooltipButton>
					]}
				/>
			)}
			dataSource={companies?.data}
			columns={columns as ColumnsType}
			loading={isLoading || isFetching}
		/>
	)
}
