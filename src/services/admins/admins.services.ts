import { api } from "src/api"
import { TResponseData, TResponseSingleData } from "src/services/shared"
import { TAdmin, TAdminChange } from "./admins.types"

const axiosGetAdmins = async (type: "admin" | "dashboard"): Promise<TResponseData<TAdmin>> => {
	const response = await api.get(`/${type}/admins`)
	return response.data
}

const axiosCreateAdmins = async (value: TAdminChange): Promise<TResponseSingleData<TAdmin>> => {
	const response = await api.post(`/admin/admins`, value)
	return response.data
}

const axiosEditAdmins = async (value: TAdminChange): Promise<TResponseSingleData<TAdmin>> => {
	const response = await api.put(`/admin/admins/${value.id}`, value)
	return response.data
}

const axiosDeleteAdmins = async (id?: number | string): Promise<TResponseSingleData<void>> => {
	const response = await api.delete(`/admin/admins/${id}`)
	return response.data
}

export { axiosGetAdmins, axiosCreateAdmins, axiosEditAdmins, axiosDeleteAdmins }
