import { ColumnsType } from "antd/es/table";
import { THoliday } from "src/services/holiday/holiday.types";
import { formatEmpty } from "src/utils";


export const useColumnsHoliday = () => {

	const columns: ColumnsType<THoliday> = [
		{
			ellipsis: false,
			width: 50,
			title: "№",
			dataIndex: "index",
			render: (_v, _r, index) => index + 1,
		},
		{
			ellipsis: true,
			title: "Дата",
			dataIndex: "date",
			render: formatEmpty,
		},
	];

	return columns;
};
