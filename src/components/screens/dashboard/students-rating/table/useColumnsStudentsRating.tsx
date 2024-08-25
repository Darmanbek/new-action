import { Rate, Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { TDashboardStudentsRating } from "src/services/index.types";
import { phoneFormatter } from "src/utils";


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
		{
			ellipsis: true,
			title: "Телефон",
			dataIndex: "phone",
			key: "phone",
			render: phoneFormatter,
		},
		// {
		// 	ellipsis: true,
		// 	title: "Группа",
		// 	dataIndex: "group",
		// 	key: "group",
		// 	render: (group: TDashboardStudentsRating["group"]) => group ? (
		// 		<Link to={`/groups/${group.id}`}>
		// 			{group.name}
		// 		</Link>
		// 	) : "-",
		// },
		{
			ellipsis: true,
			title: "Рейтинг",
			dataIndex: "rating",
			key: "rating",
			render: (rating: string) => (
				<Space>
					<Rate
						disabled={true}
						value={Number(rating.replace(",", "."))}
						allowHalf={true}
						count={10}
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
