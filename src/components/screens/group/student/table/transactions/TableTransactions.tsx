import { CalendarOutlined, PlusOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { HeadTable } from "src/components/shared";
import { TTransaction } from "src/services/index.types";
import { useFormStorageStore } from "src/store";
import { useColumnsTransactions } from "./useColumnsTransactions";
import { UiRangePicker, UiTable, UiTooltipButton } from "src/components/ui";
import { useGetGroupsByIdStudentsQuery } from "src/services/index.api";

dayjs.extend(isBetween);

const TableTransactions: FC = () => {
	const { group_id, student_id } = useParams();

	const [date, setDate] = useState<RangePickerProps["value"]>();

	const columns = useColumnsTransactions();

	const { data: students, isLoading, isFetching } = useGetGroupsByIdStudentsQuery(group_id);


	const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer);

	return (
		<UiTable<TTransaction>
			title={() => (
				<HeadTable
					title={"Транзакции"}
					children={[
						<Space.Compact key={"Range Date"}>
							<UiRangePicker
								value={date}
								onChange={setDate}
							/>
							<UiTooltipButton
								type={"primary"}
								title={"Текущий месяц"}
								icon={<CalendarOutlined />}
								onClick={() => setDate([dayjs().startOf("month"), dayjs().endOf("month")])}
							/>
						</Space.Compact>,
						<UiTooltipButton
							title="Добавить"
							key="Add_Button"
							type="primary"
							icon={<PlusOutlined />}
							onClick={toggleDrawer}
						>
							Добавить
						</UiTooltipButton>,
					]}
				/>
			)}
			dataSource={
				students
					?.data
					?.find((el) => el.id === student_id)
					?.transactions
					?.filter(el => {
						if (!date) return true;
						const [start, end] = date;
						if (!start && !end) return true;
						return dayjs(el.date).isBetween(start, end);
					})
			}
			columns={columns}
			loading={isLoading || isFetching}
		/>
	);
};

export { TableTransactions };
