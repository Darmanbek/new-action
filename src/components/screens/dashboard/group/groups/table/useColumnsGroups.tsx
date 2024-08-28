import { EyeFilled } from "@ant-design/icons";
import { Space, Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import { useNavigate } from "react-router-dom";
import { UiBadge, UiButton, UiFilterIcon, UiTag } from "src/components/ui";
import { completeData } from "src/data";
import { useGetDayQuery } from "src/services/day/day.api";
import { TGroup } from "src/services/groups/groups.types";
import {
	completeColor,
	completeIcon,
	completeName,
	dayTranslation,
	formatEmpty,
	monthGrammar,
	priceFormatter,
} from "src/utils";

dayjs.locale("ru");

export const useColumnsGroups = () => {
	const navigate = useNavigate();

	const { data: days } = useGetDayQuery();

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
			render: formatEmpty,
		},
		{
			ellipsis: true,
			title: "Учитель",
			dataIndex: "teachers",
			key: "teachers",
			render: (teachers: TGroup["teachers"]) => {
				const teacher = teachers?.find((t) => !t.assistant);
				return teacher ? `${teacher?.first_name} ${teacher?.last_name}` : "-";
			},
		},
		{
			ellipsis: true,
			title: "Ассистент",
			dataIndex: "teachers",
			key: "assistant",
			render: (teachers: TGroup["teachers"]) => {
				const assistant = teachers?.find((t) => t.assistant);
				return assistant
					? `${assistant?.first_name} ${assistant?.last_name}`
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
			),
			filters: days?.data.map(el => ({
				value: el.id,
				text: dayTranslation(el.name),
			})),
			filterIcon: <UiFilterIcon />,
			filterMultiple: false,
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
			sorter: true,
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
			align: "center",
			title: "Статус",
			dataIndex: "is_completed",
			key: "is_completed",
			render: (is_completed: boolean) => (
				<UiTag icon={completeIcon(is_completed)} color={completeColor(is_completed)}>
					{completeName(is_completed)}
				</UiTag>
			),
			filters: completeData,
			filterIcon: <UiFilterIcon />,
			filterMultiple: false,
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
							shape={"circle"}
							icon={<EyeFilled />}
							onClick={() => navigate(`/groups/${group.id}`)}
							aria-label="View"
						/>
					</Tooltip>
				</Space>
			),
		},
	];

	return columns;
};
