import { TTeacher, TGroupStudent, TGroupLesson } from '../../index.types';

export type TGroup = {
  id: string | number;
  teachers: Pick<TTeacher, 'id' | 'first_name' | 'last_name' | 'assistant'>[];
  name: string;
  description: string;
  price: number;
  duration: number;
  is_completed: boolean;
  start_date: string;
  students_count: number;
  lessons_count: number;
  students: TGroupStudent[];
  lessons: TGroupLesson[];
};

export type TGroupChange = {
  id: string | number;
  teacher_id: number | string;
  assistant: string | number;
  name: string;
  description: string;
  price: number;
  start_date?: string;
  duration: number;
};
