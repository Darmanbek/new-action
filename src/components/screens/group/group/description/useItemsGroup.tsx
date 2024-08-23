import { DescriptionsItemType } from "antd/es/descriptions";
import dayjs from "dayjs";
import { UiBadge } from "src/components/ui";
import { TGroup } from "src/services/index.types";
import { completeColor, completeName, formatEmpty, monthGrammar, priceFormatter } from "src/utils";


export const useItemsGroup = (data?: TGroup) => {

	const teacher = data?.teachers.find(el => !el.assistant);
	const assistant = data?.teachers.find(el => el.assistant);

	const items: DescriptionsItemType[] = [
		// {
		// 	key: "name",
		// 	label: "Название",
		// 	children: formatEmpty(data?.name)
		// },
		{
			key: "teacher",
			label: "Учитель",
			children: `${formatEmpty(teacher?.first_name)} ${formatEmpty(teacher?.last_name)}`,
		},
		{
			key: "assistant",
			label: "Ассистент",
			children: `${formatEmpty(assistant?.first_name)} ${formatEmpty(assistant?.last_name)}`,
		},
		{
			key: "day",
			label: "Дни",
			children: formatEmpty(data?.day?.name),
		},
		{
			key: "price",
			label: "Цена",
			children: priceFormatter(data?.price),
		},
		{
			key: "duration",
			label: "Длительность",
			children: data ? `${data?.duration} ${monthGrammar(data?.duration.toString())}` : "-",
		},
		{
			key: "start_date",
			label: "Стартовая дата",
			children: formatEmpty(dayjs(data?.start_date).format("YYYY-MMMM-DD HH:mm:ss")),
		},
		{
			key: "is_completed",
			label: "Статус",
			children: <UiBadge
				status={completeColor(data?.is_completed)}
				text={completeName(data?.is_completed)}
			/>,
		},
		{
			key: "description",
			label: "Описание",
			children: formatEmpty(data?.description),
		},
	];

	return items;
};
