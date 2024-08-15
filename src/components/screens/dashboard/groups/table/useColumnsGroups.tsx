import { ColumnsType } from "antd/es/table";
import { ApproveCheck } from "src/components/shared";
import { UiTag } from "src/components/ui";
import { TGroup } from "src/services/groups/groups.types";
import { formatEmpty, monthGrammar, priceFormatter } from "src/utils";


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
					{formatEmpty(day?.name)}
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
	];

	return columns;
};
