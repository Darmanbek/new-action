import { FC } from "react"
import { HeadTable } from "src/components/shared"
import { UiTable } from "src/components/ui"
import { useGetDashboardAdminsQuery } from "src/services/dashboard"
// import { TDashboardAdmin } from "src/services/index.types";
import { useColumnsAdmins } from "./useColumnsAdmins"

const TableAdmins: FC = () => {
	const { data: admins, isLoading, isFetching } = useGetDashboardAdminsQuery()

	const columns = useColumnsAdmins()

	return (
		<UiTable<any>
			title={() => <HeadTable title={"Админы"} />}
			loading={isLoading || isFetching}
			dataSource={admins?.data}
			columns={columns}
		/>
	)
}

export { TableAdmins }
