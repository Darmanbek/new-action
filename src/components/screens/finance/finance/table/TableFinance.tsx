import { CalendarOutlined } from "@ant-design/icons";
import { Flex, Space, Tooltip } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import { FC, useState } from "react";
import { FaCoins } from "react-icons/fa";
import { HeadTable } from "src/components/shared";
import { UiButton, UiCard, UiRangePicker, UiStatistic, UiTable } from "src/components/ui";
import { primaryColor } from "src/data";
import { useGetFinanceQuery } from "src/services/index.api";
import { TFinanceTransactionData } from "src/services/index.types";

import { useColumnsFinance } from "./useColumnsFinance";

const TableFinance: FC = () => {
	const [date, setDate] = useState<RangePickerProps["value"]>([dayjs().startOf("month"), dayjs().endOf("month")]);

	const { data: finance, isLoading, isFetching } = useGetFinanceQuery({
		date: {
			start: date && date[0]?.format("YYYY-MM-DD"),
			end: date && date[1]?.format("YYYY-MM-DD")
		}
	});

	const columns = useColumnsFinance();

	return (
		<>
			<UiCard>
				<Flex justify={"space-between"}>
					<UiStatistic
						// title={"Прибыль"}
						value={finance?.data.total_amount}
						// suffix={"uzs"}
						valueRender={(node) => (
							<Space>
								<FaCoins color={primaryColor} /> Чистая прибыль: {node} uzs
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
			<UiTable<TFinanceTransactionData>
				title={() => (
					<HeadTable
						title={"Транзакций"}
					/>
				)}
				loading={isLoading || isFetching}
				columns={columns}
				dataSource={finance?.data?.transactions?.data}
			/>
		</>
	);
};

export { TableFinance };
