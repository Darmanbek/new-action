import type { UploadFile } from "antd"
import type { RcFile } from "antd/es/upload"
import type { TGroup } from "src/services/groups"

export type TTeacher = {
	id: string
	first_name: string
	last_name: string
	assistant: boolean
	phone: string
	teacher_data?: TTeacherInfo
	group_count: number
	groups: TGroup[]
}

export type TTeacherInfo = {
	birthday: string
	is_male: boolean
	avatar: string
}

export type TTeacherChange = {
	id?: string
	first_name: string
	last_name: string
	phone: string
	password: string
	birthday: string
	is_male: number
	avatar?: RcFile | UploadFile | UploadFile[]
}

export type TTeacherFormDataChange = {
	id?: string
	formData: FormData
}
