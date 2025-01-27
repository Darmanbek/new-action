import type { ColumnsType } from "antd/es/table"
import { useState } from "react"
import { HeadTable, SearchListInput } from "src/components/shared"
import { UiTable } from "src/components/ui"
import { useGetAcceptanceQuery } from "src/services/acceptances"
import { useSearchListStore } from "src/store"
import { useColumnsAcceptances } from "./useColumnsAcceptances"

export const TableAcceptances = () => {
	const [params, setParams] = useState({
		page: 1,
		limit: 10,
		per_page: 10
	})
	const debounceValue = useSearchListStore((state) => state.debounceValue)
	const {
		data: acceptances,
		isLoading,
		isFetching
	} = useGetAcceptanceQuery({
		search: debounceValue,
		...params
	})
	const columns = useColumnsAcceptances()

	return (
		<UiTable
			title={() => (
				<HeadTable
					title={"Заявки"}
					children={[<SearchListInput key={"Search"} placeholder={"Поиск"} />]}
				/>
			)}
			dataSource={acceptances?.data}
			columns={columns as ColumnsType}
			loading={isLoading || isFetching}
			pagination={{
				total: acceptances?.meta?.total,
				pageSize: params.limit,
				onChange: (page, limit) => {
					setParams({ page, limit, per_page: limit })
				}
			}}
		/>
	)
}
