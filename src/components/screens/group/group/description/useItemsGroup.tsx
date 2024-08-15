import { DescriptionsItemType } from "antd/es/descriptions";
import { ApproveCheck } from "src/components/shared";
import { TGroup } from "src/services/index.types";
import { formatEmpty, monthGrammar, priceFormatter } from "src/utils";


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
			children: `${formatEmpty(teacher?.first_name)} ${formatEmpty(teacher?.last_name)}`
		},
		{
			key: "assistant",
			label: "Ассистент",
			children: `${formatEmpty(assistant?.first_name)} ${formatEmpty(assistant?.last_name)}`
		},
		{
			key: "day",
			label: "Дни",
			children: formatEmpty(data?.day?.name)
		},
		{
			key: "price",
			label: "Цена",
			children: `${priceFormatter(data?.price)} uzs`
		},
		{
			key: "duration",
			label: "Длительность",
			children: data ? `${data?.duration} ${monthGrammar(data?.duration.toString())}` : "-"
		},
		{
			key: "start_date",
			label: "Стартовая дата",
			children: formatEmpty(data?.start_date)
		},
		{
			key: "is_completed",
			label: "Завершено",
			children: <ApproveCheck isValue={data?.is_completed || false} />
		},
		{
			key: "description",
			label: "Описание",
			children: formatEmpty(data?.description),
		}
	];

	return items;
};
