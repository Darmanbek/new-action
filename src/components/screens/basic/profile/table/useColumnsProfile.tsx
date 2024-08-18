import { ColumnsType } from "antd/es/table";
import { UiTag } from "src/components/ui";
import { formatEmpty, phoneFormatter, roleColor } from "src/utils";
import { TProfileAuth } from "src/services/index.types";

export const useColumnsProfile = () => {
	const columns: ColumnsType<TProfileAuth> = [
		{
			title: "Имя Фамилия",
			dataIndex: "first_name",
			key: "name",
			render: (_, r) => `${r?.first_name} ${r?.last_name}`,
		},
		{
			title: "Телефон",
			dataIndex: "phone",
			key: "phone",
			render: phoneFormatter,
		},
		{
			title: "Роль",
			dataIndex: "role",
			key: "role",
			render: (role: TProfileAuth["role"]) => <UiTag color={roleColor(role)}>{role}</UiTag>,
		},
		{
			title: "Филиал",
			dataIndex: "company",
			key: "company",
			render: (company: TProfileAuth["company"]) => formatEmpty(company?.name),
		},
	];

	return columns;
};
