import { api } from "src/api";
import { TResponseSingleData } from "src/services/index.types";
import { TBalanceChange } from "./balances.types";

const axiosCreateBalances = async (
	value: TBalanceChange,
): Promise<TResponseSingleData<void>> => {
	const response = await api.post(`/admin/transaction/balance/student`, value);
	return response.data;
};

export { axiosCreateBalances };
