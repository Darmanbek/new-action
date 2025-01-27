import { CalendarOutlined } from "@ant-design/icons"
import { Flex, Space, type TableProps, Tooltip } from "antd"
import { type RangePickerProps } from "antd/es/date-picker"
import dayjs from "dayjs"
import { type FC, useState } from "react"
import { FaCoins } from "react-icons/fa"
import { HeadTable, SearchListInput } from "src/components/shared"
import { UiButton, UiCard, UiRangePicker, UiStatistic, UiTable } from "src/components/ui"
import { primaryColor } from "src/data"
import { type TFinanceTransactionData, useGetFinancesQuery } from "src/services/finances"
import { useSearchListStore } from "src/store"
import { useColumnsProfits } from "./useColumnsProfits"

const TableProfits: FC = () => {
	const debounceValue = useSearchListStore((state) => state.debounceValue)

	const [paymentType, setPaymentType] = useState<number>()
	const [group, setGroup] = useState<string>()
	const [date, setDate] = useState<RangePickerProps["value"]>([
		dayjs().startOf("month"),
		dayjs().endOf("month")
	])

	const {
		data: finance,
		isLoading,
		isFetching
	} = useGetFinancesQuery({
		date: {
			start: date && date[0]?.format("YYYY-MM-DD"),
			end: date && date[1]?.format("YYYY-MM-DD")
		},
		payment_type: paymentType,
		group_id: group,
		search: debounceValue
	})

	const onChangeTable: TableProps<TFinanceTransactionData>["onChange"] = (_p, filters) => {
		if (
			filters.payment_type &&
			Array.isArray(filters.payment_type) &&
			typeof filters.payment_type[0] === "number"
		) {
			setPaymentType(filters.payment_type[0])
		} else {
			setPaymentType(undefined)
		}
		if (filters.group && Array.isArray(filters.group) && typeof filters.group[0] === "string") {
			setGroup(filters.group[0])
		} else {
			setGroup(undefined)
		}
	}

	const columns = useColumnsProfits()

	return (
		<>
			<UiCard>
				<Flex justify={"space-between"} wrap={true}>
					<UiStatistic
						// title={"Прибыль"}
						value={finance?.data.profit}
						// suffix={"uzs"}
						valueRender={(node) => (
							<Space wrap={true}>
								<FaCoins color={primaryColor} /> Чистая прибыль: {node} UZS
							</Space>
						)}
						style={{
							display: "flex"
						}}
					/>
					<Space.Compact>
						<UiRangePicker
							value={date}
							onChange={(date) => {
								setDate(date)
							}}
							allowClear={false}
						/>
						<Tooltip title={"Текущий месяц"}>
							<UiButton
								type={"primary"}
								icon={<CalendarOutlined />}
								onClick={() => setDate([dayjs().startOf("month"), dayjs().endOf("month")])}
							/>
						</Tooltip>
					</Space.Compact>
				</Flex>
			</UiCard>
			<UiTable<TFinanceTransactionData>
				title={() => (
					<HeadTable title={"Транзакций"} children={[<SearchListInput key={"Search"} />]} />
				)}
				loading={isLoading || isFetching}
				columns={columns}
				dataSource={finance?.data?.transactions?.data}
				onChange={onChangeTable}
			/>
		</>
	)
}

export { TableProfits }
