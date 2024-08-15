import { Badge, Space, Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";
import { FaTelegramPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UiButton } from "src/components/ui";
import { TMessage } from "src/services/index.types";
import { phoneFormatter } from "src/utils";


export const useColumnsMessage = () => {
	const navigate = useNavigate();

	const columns: ColumnsType<TMessage> = [
		{
			ellipsis: true,
			title: "Ф.И.О",
			key: "name",
			render: (_v, r) => `${r?.last_name || ""} ${r?.first_name || ""}`,
		},
		{
			ellipsis: true,
			title: "Телефон",
			dataIndex: "phone",
			key: "phone",
			render: phoneFormatter,
		},
		{
			ellipsis: false,
			align: "center",
			fixed: "right",
			width: 100,
			title: "Действия",
			key: "actions",
			render: (_v, message) => (
				<Space>
					<Tooltip title={"Чат"}>
						<Badge count={message.closed_count}>
							<UiButton
								shape={"circle"}
								color={"royalblue"}
								type={"primary"}
								icon={<FaTelegramPlane style={{ fontSize: 18 }} />}
								onClick={() => navigate(`/chat/${message.id}`)}
							/>
						</Badge>
					</Tooltip>
				</Space>
			),
		},
	];

	return columns;
};
