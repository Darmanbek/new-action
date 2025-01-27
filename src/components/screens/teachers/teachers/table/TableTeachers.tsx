import { PlusOutlined } from "@ant-design/icons"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { HeadTable, SearchListInput } from "src/components/shared"
import { UiTable, UiTooltipButton } from "src/components/ui"
import { type TTeacher, useGetTeachersQuery } from "src/services/teachers"
import { useFormStorageStore, useSearchListStore } from "src/store"
import { useColumnsTeachers } from "./useColumnsTeachers"

export const TableTeachers = () => {
	const navigate = useNavigate()
	const [currentPage, setCurrentPage] = useState<number>(1)
	const debounceValue = useSearchListStore((state) => state.debounceValue)
	const {
		data: teachers,
		isLoading,
		isFetching
	} = useGetTeachersQuery({
		limit: 10,
		page: currentPage,
		search: debounceValue
	})
	const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer)
	const columns = useColumnsTeachers()

	return (
		<UiTable<TTeacher>
			title={() => (
				<HeadTable
					title={"Учителя"}
					children={[
						<SearchListInput key={"Search"} placeholder={"Поиск"} />,
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
				onClick: () => navigate(`/teachers/${data.id}`)
			})}
			dataSource={teachers?.data}
			columns={columns}
			loading={isLoading || isFetching}
			pagination={{
				total: teachers?.meta?.total,
				current: currentPage,
				onChange: (value) => setCurrentPage(value)
			}}
		/>
	)
}
