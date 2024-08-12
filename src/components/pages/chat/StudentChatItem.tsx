import { Image } from 'antd';
import clsx from 'clsx';
import React from 'react';
import { TStudentChat } from 'src/services/index.types';
import s from './chat.module.scss';

export const StudentChatItem = ({
  text,
  created_at,
  is_answer,
  owner_name,
  file_url,
}: React.PropsWithChildren<TStudentChat>) => (
  <li
    className={clsx(
      s.items__item,
      is_answer ? s.items__item__user : s.items__item__client
    )}
  >
    <p>
      <span>{owner_name}</span>
      <span>{text}</span>
      <Image src={file_url} hidden={!file_url} />
      <span>{created_at}</span>
    </p>
  </li>
);
