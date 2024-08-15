import { Rate } from "antd";
import { ColumnsType } from "antd/es/table";
import { TDashboardTeachersRating } from "src/services/dashboard/dashboard.types";
import { phoneFormatter } from "src/utils";


export const useColumnsTeachersRating = () => {

	const columns: ColumnsType<TDashboardTeachersRating> = [
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
			title: "Имя фамилия",
			key: "name",
			render: (_v, teacher) => `${teacher?.first_name} ${teacher?.last_name}`,
		},
		{
			ellipsis: true,
			title: "Телефон",
			dataIndex: "phone",
			key: "phone",
			render: phoneFormatter
		},
		{
			ellipsis: true,
			title: "Рейтинг",
			dataIndex: "rating",
			key: "rating",
			render: (rating: string) => (
				<Rate disabled={true} value={Number(rating.replace(",", "."))} allowHalf={true} />
			)
		}
	];

	return columns;
};
