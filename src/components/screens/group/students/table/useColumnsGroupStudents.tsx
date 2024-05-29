import { ColumnsType } from "antd/es/table";
import { TStudent } from "src/services/index.types";
import { phoneFormatter } from "src/utils";

export const useColumnsGroupStudents = () => {

	const columns: ColumnsType<TStudent> = [
		{
			width: 50,
			ellipsis: true,
			title: "№",
			dataIndex: "index",
			key: "index",
			render: (_v, _r, index) => index + 1
		},
		{
			ellipsis: true,
			title: "Имя Фамилия",
			dataIndex: "name",
			key: "name",
		},
		{
			ellipsis: true,
			title: "Телефон",
			dataIndex: "phone",
			key: "phone",
			render: (phone) => phoneFormatter(phone),
		},
	];

	return columns;
};
