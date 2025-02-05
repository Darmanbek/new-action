import { api } from "src/api"
import type { TGetParams, TResponse, TResponseSingleData, TStudent } from "src/services/shared"
import { TStudentChange } from "src/services/students/students.types"

const axiosGetStudents = async (params: TGetParams): Promise<TResponse<TStudent>> => {
	const response = await api.get(`/admin/students`, { params })
	return response.data
}

const axiosEditStudents = async (form: TStudentChange): Promise<TResponseSingleData<void>> => {
	const response = await api.put(`/admin/students/${form.id}`, {
		role_id: 4,
		...form
	})
	return response.data
}

export { axiosGetStudents, axiosEditStudents }
