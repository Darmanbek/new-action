import { CalendarOutlined, PlusOutlined } from "@ant-design/icons";
import { Space, Tooltip } from "antd";
import dayjs from "dayjs";
import { FC, useState } from "react";
import { HeadTable } from "src/components/shared";
import { UiButton, UiDatePicker, UiTable, UiTooltipButton } from "src/components/ui";
import { useGetHolidayQuery } from "src/services/holiday/holiday.api";
import { THoliday } from "src/services/index.types";
import { useFormStorageStore } from "src/store";
import { useColumnsHoliday } from "./useColumnsHoliday";

const TableHoliday: FC = () => {

	const toggleDrawer = useFormStorageStore(
		state => state.toggleDrawer,
	);

	const [date, setDate] = useState(dayjs());

	const { data: holiday, isLoading, isFetching } = useGetHolidayQuery({
		date: [
			date ? date.startOf("month").format("YYYY-MM-DD") : "",
			date ? date.endOf("month").format("YYYY-MM-DD") : "",
		],
	});

	const columns = useColumnsHoliday();

	return (
		<UiTable<THoliday>
			title={() => (
				<HeadTable
					title={"Праздничные дни"}
					children={[
						<Space.Compact key={"Holiday Date Range"}>
							<UiDatePicker
								picker={"month"}
								value={date}
								onChange={(date) => {
									setDate(date);
								}}
								format={"YYYY MMMM"}
								allowClear={false}
							/>
							<Tooltip title={"Текущий месяц"}>
								<UiButton
									type={"primary"}
									icon={<CalendarOutlined />}
									onClick={() => setDate(dayjs())}
								/>
							</Tooltip>
						</Space.Compact>,
						<UiTooltipButton
							title={"Добавить"}
							key={"Holiday Add"}
							type={"primary"}
							icon={<PlusOutlined />}
							onClick={() => toggleDrawer()}
						>
							Добавить
						</UiTooltipButton>,
					]}
				/>
			)}
			loading={isLoading || isFetching}
			dataSource={holiday?.data}
			columns={columns}
		/>
	);
};

export { TableHoliday };
