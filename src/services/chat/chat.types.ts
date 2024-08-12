import { TGroupStudent } from '../index.types';

export type TStudentChat = {
  with_user: Omit<TGroupStudent, 'payment_history'>;
  messages: TMessage[];
};

export type TMessage = {
  message_id: string;
  message: string;
  closed: boolean;
  from_user: Omit<TGroupStudent, 'payment_history'>;
  to_user: Omit<TGroupStudent, 'payment_history'>;
};

export type TStudentChatChange = {
  to_user: string;
  message: string;
};
