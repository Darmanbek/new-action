import { useQuery } from "@tanstack/react-query"
import { useMessage } from "src/hooks"
import { TResponseError } from "src/services/shared"
import { axiosGetDay } from "src/services/shared/day/day.services"

const useGetDayQuery = () => {
	const { message } = useMessage()
	return useQuery({
		queryFn: axiosGetDay,
		queryKey: ["day"],
		onError: (error: TResponseError) => {
			message.error(error?.response?.data?.message)
		}
	})
}

export { useGetDayQuery }
