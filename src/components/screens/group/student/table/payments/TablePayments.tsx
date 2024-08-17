import { useParams } from "react-router-dom";
import { HeadTable } from "src/components/shared";
import { UiTable } from "src/components/ui";
import { TPaymentHistory } from "src/services/payment/payment.types";
import { useGetGroupsByIdQuery } from "src/services/index.api";
import { useColumnsPayments } from "src/components/screens/group/student/table/payments/useColumnsPayments";

export const TablePayments = () => {

	const { group_id, student_id } = useParams();
	const {
		data: payments,
		isLoading,
		isFetching,
	} = useGetGroupsByIdQuery(group_id);
	const columns = useColumnsPayments();

	return (
		<UiTable<TPaymentHistory>
			title={() => (
				<HeadTable
					title={"Платежи"}
				/>
			)}
			dataSource={
				payments?.data?.students.find((el) => el.id === student_id)
					?.payment_history
			}
			columns={columns}
			loading={isLoading || isFetching}
		/>
	);
};
