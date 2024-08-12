export type TGroupLesson = {
  id: string | number;
  title: string;
  price: number;
  date: string;
  is_free: boolean;
};

export type TGroupLessonChange = {
  id?: number | string;
  title: string;
  price: number;
  date: string;
  is_free: boolean;
};
