import capitalize from "antd/es/_util/capitalize";
import { ColumnsType } from "antd/es/table";
import { UiFilterIcon } from "src/components/ui";
import { TTransaction } from "src/services/index.types";
import { useGetPaymentTypesQuery } from "src/services/index.api";
import { formatEmpty, paymentFormatToTag, paymentTranlation, priceFormatter } from "src/utils";


export const useColumnsTransactions = () => {
	const {
		data: paymentTypes,
	} = useGetPaymentTypesQuery();

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
			filters: paymentTypes?.data.map(el => ({
				value: el.name,
				text: capitalize(paymentTranlation(el.name)),
			})),
			onFilter: (value, record) => record.payment_type.toLowerCase() === value.toString().toLowerCase(),
			filterIcon: <UiFilterIcon />,
			filterMultiple: false,
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
