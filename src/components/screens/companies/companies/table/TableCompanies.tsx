import { PlusOutlined } from "@ant-design/icons"
import { HeadTable } from "src/components/shared"
import { UiTable, UiTooltipButton } from "src/components/ui"
import { TCompany, useGetCompaniesQuery } from "src/services/companies"
import { useAuthPersistStore, useFormStorageStore } from "src/store"
import { useColumnsCompanies } from "./useColumnsCompanies"

export const TableCompanies = () => {
	const { toCompany, role } = useAuthPersistStore()
	const { data: companies, isLoading, isFetching } = useGetCompaniesQuery()
	const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer)
	const columns = useColumnsCompanies()
	
	return (
		<UiTable<TCompany>
			title={() => (
				<HeadTable
					title={"Филиалы"}
					children={role === "director" ? [] : [
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
			onRow={(data) => ({
				onClick: () => role === "director" && toCompany(data)
			})}
			dataSource={companies?.data}
			columns={columns}
			loading={isLoading || isFetching}
		/>
	)
}
