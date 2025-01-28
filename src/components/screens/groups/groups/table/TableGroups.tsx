import { CalendarOutlined, PlusOutlined } from "@ant-design/icons"
import { Space, type TableProps } from "antd"
import type { RangePickerProps } from "antd/es/date-picker"
import dayjs from "dayjs"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { HeadTable, SearchListInput } from "src/components/shared"
import { UiRangePicker, UiTable, UiTooltipButton } from "src/components/ui"
import { useAuth } from "src/hooks"
import { type TGroup, useGetGroupsQuery } from "src/services/groups"
import { useFormStorageStore, useSearchListStore } from "src/store"
import { useColumnsGroups } from "./useColumnsGroups"

export const TableGroups = () => {
	const { isDirector } = useAuth()
	const navigate = useNavigate()
	// const [price, setPrice] = useState<string>();
	const [completed, setCompleted] = useState<number>()
	const [day, setDay] = useState<number | string>()
	const [date, setDate] = useState<RangePickerProps["value"]>()
	const [currentPage, setCurrentPage] = useState<number>(1)
	const debounceValue = useSearchListStore((state) => state.debounceValue)
	const {
		data: groups,
		isLoading,
		isFetching
	} = useGetGroupsQuery({
		date: {
			start: date && date[0] ? date[0]?.format("YYYY-MM-DD") : null,
			end: date && date[0] ? date[0]?.format("YYYY-MM-DD") : null
		},
		limit: 10,
		page: currentPage,
		search: debounceValue,
		// price,
		day,
		is_completed: completed
	})
	const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer)

	const onChangeTable: TableProps<TGroup>["onChange"] = (_pagination, filters) => {
		if (
			filters.is_completed &&
			Array.isArray(filters.is_completed) &&
			typeof filters.is_completed[0] === "number"
		) {
			setCompleted(filters.is_completed[0])
		} else {
			setCompleted(undefined)
		}

		if (
			filters.day &&
			Array.isArray(filters.day) &&
			(typeof filters.day[0] === "number" || typeof filters.day[0] === "string")
		) {
			setDay(filters.day[0])
		} else {
			setDay(undefined)
		}

		// if (sorter && !Array.isArray(sorter) && sorter.columnKey === "price") {
		// 	if (sorter.order === "ascend") {
		// 		setPrice("asc");
		// 	} else if (sorter.order === "descend") {
		// 		setPrice("desc");
		// 	} else {
		// 		setPrice(undefined);
		// 	}
		// }
	}

	const columns = useColumnsGroups()

	return (
		<UiTable<TGroup>
			title={() => (
				<HeadTable
					title={"Группы"}
					children={[
						<SearchListInput key={"Search"} placeholder={"Поиск"} />,
						<Space.Compact key={"Space Range date"}>
							<UiRangePicker value={date} onChange={setDate} />
							<UiTooltipButton
								type={"primary"}
								showTitle={true}
								title={"Текущий месяц"}
								icon={<CalendarOutlined />}
								onClick={() => setDate([dayjs().startOf("month"), dayjs().endOf("month")])}
							/>
						</Space.Compact>,
						isDirector ? null : (
							<UiTooltipButton
								title={"Добавить"}
								key={"Add_Button"}
								type={"primary"}
								icon={<PlusOutlined />}
								onClick={toggleDrawer}
							>
								Добавить
							</UiTooltipButton>
						)
					]}
				/>
			)}
			onRow={(data) => ({
				onClick: () => navigate(`/groups/${data.id}`)
			})}
			dataSource={groups?.data}
			columns={columns}
			loading={isLoading || isFetching}
			onChange={onChangeTable}
			pagination={{
				total: groups?.meta?.total,
				current: currentPage,
				onChange: (value) => setCurrentPage(value)
			}}
		/>
	)
}
