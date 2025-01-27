import { Badge, Space, Tooltip } from "antd"
import type { ColumnsType } from "antd/es/table"
import { FaTelegramPlane } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { UiButton } from "src/components/ui"
import type { TMessage } from "src/services/chat"
import { phoneFormatter } from "src/utils"

export const useColumnsMessages = () => {
	const navigate = useNavigate()

	const columns: ColumnsType<TMessage> = [
		{
			ellipsis: true,
			title: "Имя Фамилия",
			key: "name",
			render: (_v, r) => `${r?.last_name || ""} ${r?.first_name || ""}`
		},
		{
			ellipsis: true,
			title: "Телефон",
			dataIndex: "phone",
			key: "phone",
			render: phoneFormatter
		},
		{
			ellipsis: false,
			align: "center",
			fixed: "right",
			width: 100,
			title: "Действия",
			key: "actions",
			render: (_v, message) => (
				<Space onClick={(e) => e.stopPropagation()}>
					<Tooltip title={"Чат"}>
						<Badge count={message.closed_count}>
							<UiButton
								shape={"circle"}
								color={"royalblue"}
								type={"primary"}
								icon={<FaTelegramPlane style={{ fontSize: 24 }} />}
								onClick={() => navigate(`/chat/${message.id}`)}
							/>
						</Badge>
					</Tooltip>
				</Space>
			)
		}
	]

	return columns
}
