import { api } from "src/api";
import { TResponseSingleData } from "src/services/index.types";
import { TFrozenStatusChange } from "./frozen.status.types";

const axiosCreateFrozenStatus = async (form: TFrozenStatusChange): Promise<TResponseSingleData<void>> => {
	const response = await api.post(`/admin/frozen-status`, form);
	return response.data;
};

export {
	axiosCreateFrozenStatus,
};
