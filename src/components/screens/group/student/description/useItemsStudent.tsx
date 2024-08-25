import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Statistic } from "antd";
import { DescriptionsItemType } from "antd/es/descriptions";
import { TStudent } from "src/services/index.types";
import { phoneFormatter } from "src/utils";


export const useItemsStudent = (data?: TStudent) => {
	const items: DescriptionsItemType[] = [
		// {
		// 	key: "first_name",
		// 	label: "Имя",
		// 	children: formatEmpty(data?.first_name)
		// },
		// {
		// 	key: "last_name",
		// 	label: "Фамилия",
		// 	children: formatEmpty(data?.last_name)
		// },
		{
			key: "balance",
			label: "Баланс",
			span: { xs: 1 },
			children: (
				// <UiTag color={Number(data?.balance?.total_amount) > 0 ? "green-inverse" : "red-inverse"}>
				// 	{priceFormatter(data?.balance?.total_amount)}
				// </UiTag>

				<Statistic
					value={data?.balance?.total_amount ?? 0}
					valueStyle={{ color: Number(data?.balance?.total_amount) >= 0 ? "#3f8600" : "#cf1322" }}
					prefix={Number(data?.balance?.total_amount) >= 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
					suffix="UZS"
				/>
			),
		},
		{
			key: "phone",
			label: "Телефон",
			children: phoneFormatter(data?.phone),
		},

	];

	return items;
};
