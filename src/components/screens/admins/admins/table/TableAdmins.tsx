import { PlusOutlined } from "@ant-design/icons"
import { HeadTable } from "src/components/shared"
import { UiTable, UiTooltipButton } from "src/components/ui"
import { type TAdmin, useGetAdminsQuery } from "src/services/admins"
import { useFormStorageStore } from "src/store"
import { useColumnsAdmins } from "./useColumnsAdmins"

export const TableAdmins = () => {
	const { data: admins, isLoading, isFetching } = useGetAdminsQuery()
	const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer)
	const columns = useColumnsAdmins()

	return (
		<UiTable<TAdmin>
			title={() => (
				<HeadTable
					title={"Админы"}
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
			dataSource={admins?.data}
			columns={columns}
			loading={isLoading || isFetching}
		/>
	)
}
