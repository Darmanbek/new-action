import { ColumnsType } from "antd/es/table";
import { TTransaction } from "src/services/index.types";
import { formatEmpty, paymentFormatToTag, priceFormatter } from "src/utils";


export const useColumnsTransactions = () => {
	const columns: ColumnsType<TTransaction> = [
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
			title: "Способ оплаты",
			dataIndex: "payment_type",
			key: "payment_type",
			render: paymentFormatToTag,
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
