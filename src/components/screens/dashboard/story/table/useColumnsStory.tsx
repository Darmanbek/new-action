import type { ColumnsType } from "antd/es/table";
import type { TStory } from "src/services/index.types";
import { Typography } from "antd";
import { formatEmpty } from "src/utils";


export const useColumnsStory = () => {

	const columns: ColumnsType<TStory> = [
		{
			ellipsis: false,
			title: "Заголовок",
			dataIndex: "title",
			key: "title",
			render: (value: string) => (
				<Typography.Paragraph
					style={{ fontSize: "inherit" }}
					ellipsis={{
						expandable: "collapsible",
						symbol: (expanded) => expanded ? "Закрыть" : "Раскрыть"
					}}
				>
					{value}
				</Typography.Paragraph>
			),
		},
		{
			ellipsis: false,
			width: 250,
			title: "Дата",
			dataIndex: "date",
			key: "date",
			render: formatEmpty,
		},
	];

	return columns;
};
