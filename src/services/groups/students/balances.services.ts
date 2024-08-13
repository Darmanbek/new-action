import { api } from "src/api";
import { TResponseSingleData } from "src/services/index.types";
import { TGroupStudentCreateBalance } from "./balances.types";

const axiosCreateGroupStudentsBalances = async (
	value: TGroupStudentCreateBalance,
): Promise<TResponseSingleData<TGroupStudentCreateBalance>> => {
	const response = await api.post(`/admin/transaction/balance/student`, value);
	return response.data;
};

export { axiosCreateGroupStudentsBalances };
