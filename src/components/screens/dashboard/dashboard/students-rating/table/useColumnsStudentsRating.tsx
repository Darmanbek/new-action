import { Rate, Space } from "antd"
import type { ColumnsType } from "antd/es/table"
import { Link } from "react-router-dom"
import type { TDashboardStudentsRating } from "src/services/dashboard"

export const useColumnsStudentsRating = () => {
	const columns: ColumnsType<TDashboardStudentsRating> = [
		{
			ellipsis: false,
			width: 50,
			title: "№",
			dataIndex: "index",
			key: "index",
			render: (_v, _r, index) => index + 1
		},
		{
			ellipsis: true,
			title: "Студент",
			dataIndex: "student",
			key: "student",
			render: (student: TDashboardStudentsRating["student"]) =>
				`${student?.first_name} ${student?.last_name}`
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
			title: "Группа",
			dataIndex: "group",
			key: "group",
			render: (group: TDashboardStudentsRating["group"]) =>
				group ? <Link to={`/groups/${group.id}`}>{group?.name}</Link> : "-"
		},
		{
			fixed: "right",
			ellipsis: true,
			title: "Рейтинг",
			dataIndex: "rating",
			key: "rating",
			render: (rating: string) => (
				<Space>
					<Rate disabled={true} value={1} count={1} />
					<span>{rating}</span>
				</Space>
			)
		}
	]

	return columns
}
