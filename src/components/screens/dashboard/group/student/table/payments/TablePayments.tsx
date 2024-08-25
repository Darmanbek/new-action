import { useParams } from "react-router-dom";
import { HeadTable } from "src/components/shared";
import { UiTable } from "src/components/ui";
import { TPaymentHistory } from "src/services/payment/payment.types";
import { useGetDashboardCompaniesGroupsByIdQuery } from "src/services/index.api";
import { useColumnsPayments } from "./useColumnsPayments";

export const TablePayments = () => {
	const { group_id, student_id } = useParams();

	const {
		data: group,
		isLoading,
		isFetching,
	} = useGetDashboardCompaniesGroupsByIdQuery(group_id);
	const columns = useColumnsPayments();

	return (
		<UiTable<TPaymentHistory>
			title={() => (
				<HeadTable
					title={"Платежи"}
				/>
			)}
			dataSource={
				group?.data?.students.find((el) => el.id === student_id)
					?.payment_history
			}
			columns={columns}
			loading={isLoading || isFetching}
		/>
	);
};
