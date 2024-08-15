import { DescriptionsItemType } from "antd/es/descriptions";
import { TStudent } from "src/services/index.types";
import { formatEmpty, phoneFormatter } from "src/utils";


export const useItemsStudent = (data?: TStudent) => {
	const items: DescriptionsItemType[] = [
		{
			key: "first_name",
			label: "Имя",
			children: formatEmpty(data?.first_name)
		},
		{
			key: "last_name",
			label: "Фамилия",
			children: formatEmpty(data?.last_name)
		},
		{
			key: "phone",
			label: "Телефон",
			children: phoneFormatter(data?.phone)
		}
	];

	return items;
};
