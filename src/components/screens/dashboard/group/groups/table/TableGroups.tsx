import { CalendarOutlined } from "@ant-design/icons";
import { Space, TableProps } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeadTable, SearchListInput } from "src/components/shared";
import { UiRangePicker, UiTable, UiTooltipButton } from "src/components/ui";
import { useGetDashboardCompaniesByIdQuery } from "src/services/index.api";
import { TGroup } from "src/services/groups/groups.types";
import { useAuthPersistStore, useSearchListStore } from "src/store";

import { useColumnsGroups } from "./useColumnsGroups";

const TableGroups: FC = () => {
	const navigate = useNavigate();
	const currentCompany = useAuthPersistStore(
		state => state.company,
	);
	const debounceValue = useSearchListStore((state) => state.debounceValue);

	const [price, setPrice] = useState<string>();
	const [day, setDay] = useState<number>();
	const [completed, setCompleted] = useState<number>();
	const [date, setDate] = useState<RangePickerProps["value"]>();

	const { data: company, isLoading, isFetching } = useGetDashboardCompaniesByIdQuery({
		// is_completed: 1,
		date: {
			start: (date && date[0]) ? date[0]?.format("YYYY-MM-DD") : null,
			end: (date && date[0]) ? date[0]?.format("YYYY-MM-DD") : null,
		},
		search: debounceValue,
		price,
		is_completed: completed,
		day,
	}, currentCompany?.id);

	const onChangeTable: TableProps<TGroup>["onChange"] = (_pagination, filters, sorter) => {

		if (filters.day && Array.isArray(filters.day) && typeof filters.day[0] === "number") {
			setDay(filters.day[0]);
		} else {
			setDay(undefined);
		}

		if (filters.is_completed && Array.isArray(filters.is_completed) && typeof filters.is_completed[0] === "number") {
			setCompleted(filters.is_completed[0]);
		} else {
			setCompleted(undefined);
		}


		if (sorter && !Array.isArray(sorter) && sorter.columnKey === "price") {
			if (sorter.order === "ascend") {
				setPrice("asc");
			} else if (sorter.order === "descend") {
				setPrice("desc");
			} else {
				setPrice(undefined);
			}
		}
	};

	const columns = useColumnsGroups();

	return (
		<UiTable<TGroup>
			title={() => (
				<HeadTable
					title={"Группы"}
					children={[
						<SearchListInput key="Search" placeholder="Поиск" />,
						<Space.Compact key={"Space Range date"}>
							<UiRangePicker
								value={date}
								onChange={setDate}
							/>
							<UiTooltipButton
								type={"primary"}
								showTitle={true}
								title={"Текущий месяц"}
								icon={<CalendarOutlined />}
								onClick={() => setDate([dayjs().startOf("month"), dayjs().endOf("month")])}
							/>
						</Space.Compact>,
					]}
				/>
			)}
			onRow={(data) => ({
				onClick: () => navigate(`/groups/${data.id}`),
			})}
			loading={isLoading || isFetching}
			dataSource={company?.data?.groups}
			onChange={onChangeTable}
			columns={columns}
		/>
	);
};

export { TableGroups };
