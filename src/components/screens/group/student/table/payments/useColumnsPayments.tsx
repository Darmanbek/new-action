import { ColumnsType } from "antd/es/table";
import { formatEmpty, priceFormatter } from "src/utils";
import { TPaymentHistory } from "src/services/index.types";

export const useColumnsPayments = () => {
	const columns: ColumnsType<TPaymentHistory> = [
		{
			width: 50,
			ellipsis: true,
			title: "№",
			dataIndex: "index",
			key: "index",
			render: (_v, _r, index) => index + 1,
		},
		{
			ellipsis: true,
			title: "Сумма",
			dataIndex: "amount",
			key: "amount",
			render: priceFormatter,
		},
		{
			ellipsis: true,
			title: "Комментарий",
			dataIndex: "lesson",
			key: "lesson",
			render: (lesson: TPaymentHistory["lesson"]) => formatEmpty(lesson?.title),
		},
		{
			ellipsis: true,
			title: "Дата",
			dataIndex: "date",
			key: "date",
			render: formatEmpty,
		},
	];

	return columns;
};
