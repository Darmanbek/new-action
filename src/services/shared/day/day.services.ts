import { api } from "src/api"
import type { TResponseData } from "src/services/shared"
import type { TDay } from "src/services/shared/day/day.types"

const axiosGetDay = async (): Promise<TResponseData<TDay>> => {
	const response = await api.get(`/day`)
	return response.data
}

export { axiosGetDay }
