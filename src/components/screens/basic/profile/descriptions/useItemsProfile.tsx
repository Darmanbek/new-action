import { Badge, DescriptionsProps } from "antd";
import { phoneFormatter, roleColor } from "src/utils";

export const useItemsProfile = (
	isMobile: boolean,
	data?: any,
) => {
	const items: DescriptionsProps["items"] = [
		{
			key: "1",
			label: <b>Пользователь</b>,
			children: data?.name,
			style: {
				whiteSpace: "nowrap",
			},
			span: 1,
		},
		{
			key: "2",
			label: <b>Телефон</b>,
			children: phoneFormatter(data?.phone),
			style: {
				whiteSpace: "nowrap",
			},
			span: 1,
		},
		{
			key: "4",
			label: <b>Дата создания</b>,
			children: data?.created_at ? data?.created_at : "-",
			style: {
				whiteSpace: "nowrap",
			},
			span: 1,
		},
		{
			key: "5",
			label: <b>Дата изменения</b>,
			children: data?.updated_at ? data?.updated_at : "-",
			style: {
				whiteSpace: "nowrap",
			},
			span: 1,
		},
		{
			key: "6",
			label: <b>Роль</b>,
			children: (
				<Badge
				color={roleColor(0)}
				status="processing"
				text={data.role}
				/>
			),
			span: isMobile ? 1 : 2,
			style: {
				whiteSpace: "nowrap",
			},
		},
	];

	return items;
};
