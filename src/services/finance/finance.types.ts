import { TCompany } from "src/services/companies/companies.types";
import { TGroup } from "src/services/groups/groups.types";
import { TPaymentType } from "src/services/payment/payment.types";
import { TStudent } from "src/services/shared/shared.types";


export type TFinance = {
	total_amount: string | number;
	transaction: TFinanceTransaction;
	transactions: TFinanceTransaction;
}

export type TFinanceCompanies = {
	gross_profit: number;
	companies: (Omit<TCompany, "admin"> & {
		total_amount: number;
	})[];
}

export type TFinanceTransaction = {
	data: TFinanceTransactionData[];
	total: number;
}

export type TFinanceTransactionData = {
	id: string;
	company_id: string;
	group_id: string;
	student_id: string;
	payment_type_id: number;
	amount: number;
	date: string;
	created_at: string;
	updated_at: string;
	student: TStudent;
	group: TGroup;
	payment_type: TPaymentType;
}
