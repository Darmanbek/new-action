import { DeleteOutlined, EditOutlined, EyeFilled } from "@ant-design/icons"
import { Space, Tooltip, Typography } from "antd"
import type { ColumnsType } from "antd/es/table"
import Text from "antd/es/typography/Text"
import { GlobalPopconfirm } from "src/components/shared"
import { UiButton } from "src/components/ui"
import { type TStory, useDeleteStoriesMutation } from "src/services/stories"
import { useFormStorageStore } from "src/store"
import { formatEmpty } from "src/utils"

export const useColumnsStories = () => {
	const { mutate: deleteStory } = useDeleteStoriesMutation()

	const setParamsForm = useFormStorageStore((state) => state.setParamsForm)

	const onEditStory = (item: TStory) => setParamsForm(item)
	const onDeleteStory = (id: number | string) => deleteStory(id)

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
		},
		{
			fixed: "right",
			align: "center",
			width: 150,
			dataIndex: "actions",
			title: "Действия",
			key: "action",
			render: (_, record) => (
				<Space onClick={(e) => e.stopPropagation()}>
					<Tooltip title={"Изменить"}>
						<UiButton
							type={"primary"}
							shape={"circle"}
							color={"orange"}
							icon={<EditOutlined />}
							onClick={() => onEditStory(record)}
							aria-label={"Edit"}
						/>
					</Tooltip>
					<GlobalPopconfirm onConfirm={() => onDeleteStory(record.id)} title={record.title}>
						<Tooltip title={"Удалить"}>
							<UiButton
								type={"primary"}
								shape={"circle"}
								danger={true}
								icon={<DeleteOutlined />}
								aria-label={"Delete"}
							/>
						</Tooltip>
					</GlobalPopconfirm>
				</Space>
			)
		}
	]

	return columns
}
