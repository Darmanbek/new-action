import { ColumnsType } from "antd/es/table";
// import { ApproveCheck } from 'src/components/shared';
import { priceFormatter } from "src/utils";
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
		// {
		//     align: 'center',
		//     ellipsis: true,
		//     title: 'Оплата',
		//     dataIndex: 'payment_check',
		//     key: 'payment_check',
		//     render: (payment_history: boolean) => (
		//         <ApproveCheck isValue={payment_history} />
		//     ),
		// },
		{
			ellipsis: true,
			title: "Сумма",
			dataIndex: "amount",
			key: "amount",
			render: (_v, r) =>
				`${priceFormatter(r.amount)}`,
		},
		{
			ellipsis: true,
			title: "Способ оплаты",
			dataIndex: "payment_type",
			key: "payment_type",
			render: (_v, r) => `${r.payment_type}`,
		},
		{
			ellipsis: true,
			title: "Дата",
			dataIndex: "date",
			key: "date",
			render: (_v, r) => `${r.date}`,
		},
	];

	return columns;
};
