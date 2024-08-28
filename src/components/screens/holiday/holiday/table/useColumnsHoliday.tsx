import { DeleteOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { GlobalPopconfirm } from "src/components/shared";
import { UiTooltipButton } from "src/components/ui";
import { useDeleteHolidayMutation } from "src/services/holiday/holiday.api";
import { THoliday } from "src/services/holiday/holiday.types";
import { formatDate } from "src/utils";


export const useColumnsHoliday = () => {

	const { mutate: deleteHoliday } = useDeleteHolidayMutation();

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
			render: formatDate,
		},
		{
			align: "center",
			ellipsis: false,
			width: 100,
			title: "Действия",
			render: (_v, record) => (
				<GlobalPopconfirm
					title={formatDate(record.date)}
					onConfirm={() => deleteHoliday(record.id)}
				>
					<UiTooltipButton
						type={"primary"}
						shape={"circle"}
						danger={true}
						icon={<DeleteOutlined />}
						showTitle={true}
						title={"Удалить"}
					/>
				</GlobalPopconfirm>
			),
		},
	];

	return columns;
};
