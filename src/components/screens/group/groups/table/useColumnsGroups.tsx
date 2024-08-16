import { Space, Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";
import { EditOutlined, DeleteOutlined, EyeFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ApproveCheck, GlobalPopconfirm } from "src/components/shared";
import { UiButton, UiTag } from "src/components/ui";
import { useDeleteGroupsMutation } from "src/services/index.api";
import { TGroup } from "src/services/index.types";
import { useFormStorageStore } from "src/store";
import { priceFormatter, formatEmpty, monthGrammar, dayTranslation } from "src/utils";

export const useColumnsGroups = () => {
	const navigate = useNavigate();
	const { mutate: deleteGroups } = useDeleteGroupsMutation();
	const setParamsForm = useFormStorageStore((state) => state.setParamsForm);
	const onEditGroups = (item: TGroup) => setParamsForm(item);

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
			title: "Учитель",
			dataIndex: "teachers",
			key: "teachers",
			render: (teachers: TGroup["teachers"]) => {
				const teacher = teachers.find((t) => !t.assistant);
				return teacher ? `${teacher.first_name} ${teacher.last_name}` : "-";
			},
		},
		{
			ellipsis: true,
			title: "Ассистент",
			dataIndex: "teachers",
			key: "assistant",
			render: (teachers: TGroup["teachers"]) => {
				const assistant = teachers.find((t) => t.assistant);
				return assistant
					? `${assistant.first_name} ${assistant.last_name}`
					: "-";
			},
		},
		{
			align: "center",
			ellipsis: true,
			title: "Дни",
			dataIndex: "day",
			key: "day",
			render: (day: TGroup["day"]) => (
				<UiTag color={day.id === 1 ? "blue" : "green"}>
					{dayTranslation(day?.name)}
				</UiTag>
			)
		},
		{
			ellipsis: true,
			title: "Стартовая дата",
			dataIndex: "start_date",
			key: "start_date",
			render: formatEmpty,
		},
		{
			ellipsis: true,
			title: "Длительность",
			dataIndex: "duration",
			key: "duration",
			render: (duration: number) => `${duration} ${monthGrammar(duration.toString())}`,
		},
		{
			title: "Цена",
			dataIndex: "price",
			key: "price",
			render: (price: string) => `${priceFormatter(Number(price))} uzs`,
		},
		{
			align: "center",
			title: "Завершено",
			dataIndex: "is_completed",
			key: "is_completed",
			render: (is_completed: boolean) => (
				<ApproveCheck isValue={is_completed} />
			),
		},
		{
			fixed: "right",
			align: "center",
			width: 150,
			dataIndex: "actions",
			title: "Действия",
			key: "action",
			render: (_, group) => (
				<Space onClick={(e) => e.stopPropagation()}>
					<Tooltip title="Смотреть">
						<UiButton
							type="primary"
							icon={<EyeFilled />}
							onClick={() => navigate(`/groups/${group.id}`)}
							aria-label="View"
						/>
					</Tooltip>
					<Tooltip title="Изменить">
						<UiButton
							type="primary"
							color="orange"
							icon={<EditOutlined />}
							onClick={() => onEditGroups(group)}
							aria-label="Edit"
						/>
					</Tooltip>
					<GlobalPopconfirm
						onConfirm={() => deleteGroups(group.id)}
						title={group.name}
					>
						<Tooltip title="Удалить">
							<UiButton
								type="primary"
								danger
								icon={<DeleteOutlined />}
								aria-label="Delete"
							/>
						</Tooltip>
					</GlobalPopconfirm>
				</Space>
			),
		},
	];

	return columns;
};
