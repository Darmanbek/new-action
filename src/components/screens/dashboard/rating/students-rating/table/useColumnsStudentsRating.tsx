import { Divider, Rate, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { TDashboardStudentsRating } from "src/services/index.types";


export const useColumnsStudentsRating = () => {

	const columns: ColumnsType<TDashboardStudentsRating> = [
		{
			ellipsis: false,
			width: 50,
			title: "№",
			dataIndex: "index",
			key: "index",
			render: (_v, _r, index) => index + 1,
		},
		{
			ellipsis: true,
			title: "Имя фамилия",
			key: "name",
			render: (_v, teacher) => `${teacher?.first_name} ${teacher?.last_name}`,
		},
		// {
		// 	ellipsis: true,
		// 	title: "Телефон",
		// 	dataIndex: "phone",
		// 	key: "phone",
		// 	render: phoneFormatter,
		// },
		{
			ellipsis: true,
			title: "Группы",
			dataIndex: "groups",
			key: "groups",
			render: (groups: TDashboardStudentsRating["groups"]) => groups ? (
				<Space split={<Divider type={"vertical"} />}>
					{groups.map((group, index) =>
						<Link key={index} to={`/groups/${group.id}`}>
							<Space>
								{group.name}
								-
								<Rate
									disabled={true}
									value={1}
									count={1}
								/>
								<span>
									{group.rating}
								</span>
							</Space>
						</Link>,
					)}
				</Space>
			) : "-",
		},
		{
			fixed: "right",
			ellipsis: true,
			title: "Рейтинг",
			dataIndex: "rating",
			key: "rating",
			render: (rating: string) => (
				<Space>
					<Rate
						disabled={true}
						value={1}
						count={1}
					/>
					<span>
						{rating}
					</span>
				</Space>
			),
		},
	];

	return columns;
};
