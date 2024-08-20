import { useParams } from "react-router-dom";
import { HeadTable } from "src/components/shared";
import { UiTable } from "src/components/ui";
import { TPaymentHistory } from "src/services/payment/payment.types";
import { useGetGroupsByIdStudentsQuery } from "src/services/index.api";
import { useColumnsPayments } from "./useColumnsPayments";

export const TablePayments = () => {

	const { group_id, student_id } = useParams();
	const { data: students, isLoading, isFetching } = useGetGroupsByIdStudentsQuery(group_id);
	const columns = useColumnsPayments();

	return (
		<UiTable<TPaymentHistory>
			title={() => (
				<HeadTable
					title={"Платежи"}
				/>
			)}
			dataSource={
				students?.data?.find((el) => el.id === student_id)
					?.payment_history
			}
			columns={columns}
			loading={isLoading || isFetching}
		/>
	);
};
