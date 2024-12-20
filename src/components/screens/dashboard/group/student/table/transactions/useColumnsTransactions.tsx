import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { Typography } from "antd";
import capitalize from "antd/es/_util/capitalize";
import { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
import { UiFilterIcon } from "src/components/ui";
import { TTransaction } from "src/services/index.types";
import { useGetPaymentTypesQuery } from "src/services/shared/payment/payment.api";
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
			sorter: (a, b) => a.amount - b.amount,
		},
		{
			ellipsis: true,
			title: "Способ оплаты",
			dataIndex: "payment_type",
			key: "payment_type",
			render: (payment_type: TTransaction["payment_type"]) => paymentFormatToTag(payment_type?.name),
			filters: paymentTypes?.data.map(el => ({
				value: el.id,
				text: capitalize(paymentTranlation(el.name)),
			})),
			onFilter: (value, record) => record?.payment_type?.id === value,
			filterIcon: <UiFilterIcon />,
			filterMultiple: false,
		},
		{
			ellipsis: false,
			width: 350,
			title: "Комментарий",
			dataIndex: "comment",
			key: "comment",
			render: (comment: string | null) => (
				<Typography.Paragraph
					style={{
						fontSize: "inherit",
					}}
					ellipsis={{
						symbol: (expanded) => expanded ?
							<EyeInvisibleFilled />
							:
							<EyeFilled />,
						expandable: "collapsible",
					}}>
					{formatEmpty(comment)}
				</Typography.Paragraph>
			),
		},
		{
			ellipsis: true,
			title: "Дата",
			dataIndex: "date",
			key: "date",
			render: formatEmpty,
			sorter: (a, b) => dayjs(a.date).isAfter(b.date) ? 1 : -1,
		},
	];

	return columns;
};
