import type { TAssessment, TLesson, TStudent } from "src/services/shared"
import type { TDay } from "src/services/shared/day"
import type { TTeacher } from "src/services/teachers"
import type { TFrozenStatus } from "./frozen-status"

export type TGroup = {
	id: string | number
	day: TDay
	teachers: Pick<TTeacher, "id" | "first_name" | "last_name" | "assistant">[]
	name: string
	description: string
	price: number
	duration: number
	is_completed: boolean
	start_date: string
	students_count: number
	lessons_count: number
	students: TStudent[]
	lessons: TLesson[]
}

export type TGroupAssessment = {
	id: string
	first_name: string
	last_name: string
	rating: string
	frozen_status: TFrozenStatus
	phone: string
	assessments: TAssessment[]
}

export type TGroupChange = {
	id: string | number
	teacher_id: number | string
	assistant: string | number
	name: string
	description: string
	price: number
	start_date?: string
	duration: number
	day_id: number
}

export type TGroupStudentChange = {
	student_id: string[] | string
	group_id?: string
}
