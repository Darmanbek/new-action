export type TGroup = {
	id: string | number;
	teachers: TTeacher[];
	name: string;
	description: string;
	price: number;
	lesson_count: number;
	is_completed: boolean;
};

export type TGroupItem = {
	id: string | number;
	teachers: TTeacher[];
	name: string;
	description: string;
	price: number;
	lesson_count: number;
	is_completed: boolean;
	students: TStudent[];
	lessons: TLesson[];
};

export type TGroupChange = {
	id?: number | string;
	teacher_id: number | string;
	assistant: number | string;
	name: string;
	description: string;
	price: number;
	lesson_count: number;
	start_date?: string;
};

export type TGroupStudentChange = {
	id?: number | string;
	student_id: number | string;
	group_id: number | string;
};

export type TGroupLessonChange = {
	id?: number | string;
	date: string;
};

export type TTeacher = {
	id: string | number;
	name: string;
	assistant: boolean;
};

export type TStudent = {
	id: string | number;
	name: string;
	phone: string;
};

export type TLesson = {
	id: string | number;
	title?: string;
	price?: number;
	date: string;
	is_free: boolean;
};
