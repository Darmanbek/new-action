import { Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { phoneFormatter, roleColor } from "src/utils";

export const useColumnsProfile = () => {
	const columns: ColumnsType<any> = [
		{
			title: "Имя Фамилия",
			dataIndex: "name",
			key: "name",
			render: (_v, r) => `${r.first_name} ${r.last_name}`
		},
		{
			title: "Телефон",
			dataIndex: "phone",
			key: "phone",
			render: (phone) => phoneFormatter(phone),
		},
		{
			title: "Роль",
			dataIndex: "role",
			key: "role",
			render: (role: string) => (
				<>
					<Tag color={roleColor(2)}>
						{role}
					</Tag>
				</>
			),
		},
	];

	return columns;
};
