import { CalendarOutlined } from "@ant-design/icons";
import { Space, TableProps, Tooltip } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import { FC, useState } from "react";
import { HeadTable } from "src/components/shared";
import { UiButton, UiRangePicker, UiTable } from "src/components/ui";
import { TDashboardFinance } from "src/services/dashboard/dashboard.types";
import { useGetDashboardFinancesQuery } from "src/services/index.api";
import { useAuthPersistStore } from "src/store";

import { useColumnsFinance } from "./useColumnsFinance";

const TableFinance: FC = () => {
	const company = useAuthPersistStore(
		state => state.company,
	);

	const [date, setDate] = useState<RangePickerProps["value"]>([dayjs().startOf("month"), dayjs().endOf("month")]);
	const [paymentType, setPaymentType] = useState<number>();

	const { data: finance, isLoading, isFetching } = useGetDashboardFinancesQuery({
		date: {
			start: date && date[0]?.format("YYYY-MM-DD"),
			end: date && date[1]?.format("YYYY-MM-DD"),
		},
		payment_type: paymentType,
	}, company?.id);

	const onChangeTable: TableProps<TDashboardFinance>["onChange"] = (_p, filters) => {
		if (filters.payment_type && Array.isArray(filters.payment_type) && typeof filters.payment_type[0] === "number") {
			setPaymentType(filters.payment_type[0]);
		} else {
			setPaymentType(undefined);
		}
	};

	const columns = useColumnsFinance();

	return (
		<>
			<UiTable<TDashboardFinance>
				title={() => (
					<HeadTable
						title={"Транзакций"}
						children={[
							<Space.Compact key={"Space Date"}>
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
							</Space.Compact>,
						]}
					/>
				)}
				loading={isLoading || isFetching}
				columns={columns}
				onChange={onChangeTable}
				dataSource={finance?.data}
			/>
		</>
	);
};

export { TableFinance };
