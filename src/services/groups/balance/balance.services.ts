import { api } from "src/api"
import type { TResponseSingleData } from "src/services/shared"
import type { TBalance, TBalanceChange } from "./balance.types"

const axiosCreateBalance = async (
	value: TBalanceChange
): Promise<TResponseSingleData<TBalance>> => {
	const response = await api.post(`/admin/transaction/balance/student`, value)
	return response.data
}

export { axiosCreateBalance }
