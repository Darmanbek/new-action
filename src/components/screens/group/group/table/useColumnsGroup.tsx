import { ColumnsType } from "antd/es/table";
import { ApproveCheck } from 'src/components/shared';
import { TLesson, TStudent } from "src/services/index.types";
import { formatEmpty, phoneFormatter, priceFormatter } from "src/utils";

export const useColumnsGroup = () => {

	const columnsStudents: ColumnsType<TStudent> = [
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
	const columnsLessons: ColumnsType<TLesson> = [
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
			title: "Задания",
			dataIndex: "title",
			key: "title",
			render: formatEmpty
		},
		{
			ellipsis: true,
			title: "Сумма",
			dataIndex: "price",
			key: "price",
			render: priceFormatter
		},
		{
			ellipsis: true,
			title: "Выходной",
			dataIndex: "is_free",
			key: "is_free",
			render: (value: boolean) => <ApproveCheck isValue={value}/>
		},
		{
			ellipsis: true,
			title: "Дата",
			dataIndex: "date",
			key: "date",
		},
	];

	return { columnsStudents, columnsLessons };
};
