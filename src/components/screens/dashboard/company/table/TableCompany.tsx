import type { FC } from "react"
import { HeadTable } from "src/components/shared"
import { UiTable } from "src/components/ui"
import { type TDashboardCompany, useGetDashboardCompaniesQuery } from "src/services/dashboard"
import { useAuthPersistStore } from "src/store"

import { useColumnsCompany } from "./useColumnsCompany"

const TableCompany: FC = () => {
	const toCompany = useAuthPersistStore((state) => state.toCompany)
	const { data: companies, isLoading, isFetching } = useGetDashboardCompaniesQuery()

	const columns = useColumnsCompany()

	return (
		<UiTable<TDashboardCompany>
			title={() => <HeadTable title={"Филиалы"} />}
			onRow={(data) => ({
				onClick: () => toCompany(data)
			})}
			loading={isLoading || isFetching}
			dataSource={companies?.data}
			columns={columns}
		/>
	)
}

export { TableCompany }
