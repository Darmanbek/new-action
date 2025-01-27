import { EyeFilled } from "@ant-design/icons"
import { Space, Typography } from "antd"
import type { ColumnsType } from "antd/es/table"
import Text from "antd/es/typography/Text"
import type { TStory } from "src/services/stories"
import { formatEmpty } from "src/utils"

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
						symbol: (expanded) => (expanded ? "Закрыть" : "Раскрыть")
					}}
				>
					{value}
				</Typography.Paragraph>
			)
		},
		{
			ellipsis: true,
			width: 0,
			dataIndex: "stock_viewed",
			key: "stock_viewed",
			render: (value) => (
				<Text type={"secondary"} style={{ fontSize: "inherit" }}>
					<Space>
						<EyeFilled />
						{value}
					</Space>
				</Text>
			)
		},
		{
			ellipsis: false,
			width: 250,
			title: "Дата",
			dataIndex: "date",
			key: "date",
			render: formatEmpty
		}
	]

	return columns
}
