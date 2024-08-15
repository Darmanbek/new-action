import { DescriptionsItemType } from "antd/es/descriptions";
import { TTeacher } from "src/services/index.types";
import { formatEmpty, phoneFormatter } from "src/utils";


export const useItemsTeacher = (data?: TTeacher) => {

	const items: DescriptionsItemType[] = [
		{
			key: "first_name",
			label: "Имя",
			children: formatEmpty(data?.first_name),
		},
		{
			key: "last_name",
			label: "Фамилия",
			children: formatEmpty(data?.last_name),
		},
		{
			key: "phone",
			label: "Телефон",
			children: phoneFormatter(data?.phone),
		},
		{
			key: "birthday",
			label: "День рождения",
			children: formatEmpty(data?.teacher_data?.birthday),
		},
		{
			key: "is_male",
			label: "Пол",
			children: data?.teacher_data?.is_male ? "Мужчина" : "Женщина",
		},
		{
			key: "company",
			label: "Филиал",
			children: data?.company?.map(item => item.name).join(", "),
			contentStyle: {
				fontWeight: "bold"
			}
		},
	];

	return items;
};
