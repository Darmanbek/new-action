import type { ColumnsType } from "antd/es/table";
import { UiTag } from "src/components/ui";
import { TGroup } from "src/services/index.types";
import { completeColor, completeIcon, completeName, formatEmpty, monthGrammar } from "src/utils";

export const useColumnsGroups = () => {

	const columns: ColumnsType<TGroup> = [
		{
			width: 50,
			ellipsis: true,
			title: "№",
			dataIndex: "index",
			key: "index",
			render: (_v, _r, index) => index + 1,
		},
		{
			ellipsis: true,
			title: "Название",
			dataIndex: "name",
			key: "name",
		},
		{
			ellipsis: true,
			title: "Стартовая дата",
			dataIndex: "start_date",
			key: "start_date",
			render: formatEmpty,
		},
		{
			align: "center",
			ellipsis: true,
			title: "Длительность",
			dataIndex: "duration",
			key: "duration",
			render: (duration: number) => `${duration} ${monthGrammar(duration.toString())}`,
		},
		{
			align: "center",
			title: "Статус",
			dataIndex: "is_completed",
			key: "is_completed",
			render: (is_completed: boolean) => (
				<UiTag icon={completeIcon(is_completed)} color={completeColor(is_completed)}>
					{completeName(is_completed)}
				</UiTag>
			),
		},
	];

	return columns;
};
