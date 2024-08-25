import { CalendarOutlined } from "@ant-design/icons";
import { Flex, Space, TableProps, Tooltip } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import { FC, useState } from "react";
import { FaCoins } from "react-icons/fa";
import { HeadTable, SearchListInput } from "src/components/shared";
import { UiButton, UiCard, UiRangePicker, UiStatistic, UiTable } from "src/components/ui";
import { primaryColor } from "src/data";
import { TDashboardFinanceTransaction } from "src/services/dashboard/dashboard.types";
import { useGetDashboardFinancesQuery } from "src/services/index.api";
import { useAuthPersistStore, useSearchListStore } from "src/store";

import { useColumnsFinance } from "./useColumnsFinance";

const TableFinance: FC = () => {
	const company = useAuthPersistStore(
		state => state.company,
	);
	const debounceValue = useSearchListStore(
		state => state.debounceValue,
	);
	const [date, setDate] = useState<RangePickerProps["value"]>([dayjs().startOf("month"), dayjs().endOf("month")]);
	const [paymentType, setPaymentType] = useState<number>();
	const [page, setPage] = useState<number>(1);
	const [limit, setLimit] = useState<number>(15);

	const { data: finance, isLoading, isFetching } = useGetDashboardFinancesQuery({
		date: {
			start: date && date[0]?.format("YYYY-MM-DD"),
			end: date && date[1]?.format("YYYY-MM-DD"),
		},
		page,
		per_page: limit,
		limit: limit,
		payment_type: paymentType,
		search: debounceValue,
	}, company?.id);

	const onChangeTable: TableProps<TDashboardFinanceTransaction>["onChange"] = (_p, filters) => {
		if (filters.payment_type && Array.isArray(filters.payment_type) && typeof filters.payment_type[0] === "number") {
			setPaymentType(filters.payment_type[0]);
		} else {
			setPaymentType(undefined);
		}
	};

	const columns = useColumnsFinance();

	return (
		<>
			<UiCard>
				<Flex justify={"space-between"}>
					<UiStatistic
						// title={"Прибыль"}
						value={finance?.profit}
						// suffix={"uzs"}
						valueRender={(node) => (
							<Space>
								<FaCoins color={primaryColor} /> Чистая прибыль: {node} uzs
							</Space>
						)}
						style={{
							display: "flex",
						}}
					/>
					<Space.Compact>
						<UiRangePicker
							value={date}
							onChange={(date) => {
								setDate(date);
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
			<UiTable<TDashboardFinanceTransaction>
				title={() => (
					<HeadTable
						title={"Транзакций"}
						children={[
							<SearchListInput key={"Search"} />,
						]}
					/>
				)}
				loading={isLoading || isFetching}
				columns={columns}
				onChange={onChangeTable}
				dataSource={finance?.data.data}
				pagination={{
					total: finance?.data.total,
					pageSize: limit,
					onChange: (page, limit) => {
						setPage(page);
						setLimit(limit);
					},
				}}
			/>
		</>
	);
};

export { TableFinance };
