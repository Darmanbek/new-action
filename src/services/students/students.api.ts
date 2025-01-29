import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useMessage } from "src/hooks"
import { TGetParams, TResponseError } from "src/services/shared"
import { axiosEditStudents, axiosGetStudents } from "./students.service"

const useGetStudentsQuery = (params: TGetParams) => {
	const { message } = useMessage()
	return useQuery({
		queryFn: () => axiosGetStudents(params),
		queryKey: ["students", ...Object.values(params)],
		keepPreviousData: true,
		onError: (error: TResponseError) => {
			message.error(error?.response?.data?.message)
		}
	})
}

const useEditStudentsMutation = () => {
	const { message } = useMessage()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: axiosEditStudents,
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ["students"]
			})
			message.success("Success")
		},
		onError: (error: TResponseError) => {
			message.error(error?.response?.data?.message)
		}
	})
}

export { useGetStudentsQuery, useEditStudentsMutation }
