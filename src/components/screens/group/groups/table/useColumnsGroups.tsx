import { Space, Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";
import { EditOutlined, DeleteOutlined, EyeFilled } from "@ant-design/icons";
import dayjs from "dayjs";
import { Link, useNavigate } from "react-router-dom";
import { GlobalPopconfirm } from "src/components/shared";
import { UiBadge, UiButton, UiTag } from "src/components/ui";
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
			render: (_v, group, index) => (
				<Tooltip title={group.is_completed ? "Завершён" : "В процессе"}>
					<UiBadge status={group.is_completed ? "success" : "processing"} text={index + 1} />
				</Tooltip>
			),
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
				return teacher ?
					<Link
						onClick={(e) => e.stopPropagation()}
						to={`/teachers/${teacher.id}`}>
						{`${teacher.first_name} ${teacher.last_name}`}
					</Link>
					:
					"-";
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
					? <Link
						onClick={(e) => e.stopPropagation()}
						to={`/teachers/${assistant.id}`}
					>
						{`${assistant.first_name} ${assistant.last_name}`}
					</Link>
					:
					"-";
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
			),
		},
		{
			ellipsis: true,
			title: "Стартовая дата",
			dataIndex: "start_date",
			key: "start_date",
			render: (start_date: TGroup["start_date"]) => (
				<>
					<p>{dayjs(start_date).format("D MMMM YYYY")}</p>
					<p>{dayjs(start_date).format("HH:mm")}</p>
				</>
			),
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
			render: priceFormatter,
		},
		{
			align: "center",
			title: "Студентов",
			dataIndex: "students_count",
			key: "students_count",
			render: (students_count) => (
				<UiTag color={"red"}>{formatEmpty(students_count)}</UiTag>
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
