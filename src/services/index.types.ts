export * from './acceptance/acceptance.types';
export * from './admin/admin.types';
export * from './auth/auth.types';
export * from './chat/chat.types';
export * from './companies/companies.types';
export * from './finance/index.types';
export * from './groups/index.types';
export * from './holiday/holiday.types';
export * from './teachers/teachers.types';

export type TResponseSingleData<T> = {
  success?: boolean;
  message?: string;
  data: T;
};

export type TResponseData<T> = {
  success?: boolean;
  message?: string;
  data: T[];
};

export type TResponse<T> = {
  success?: boolean;
  message?: string;
  data: T[];
  links?: TLinks;
  meta: TMeta;
};

export type TLinks = {
  first: string;
  last: string;
  prev: null;
  next: null;
};

export type TResponseError = {
  code: string;
  config: unknown;
  message: string;
  name: string;
  request: unknown;
  response: {
    data: {
      message: string;
    };
    status: number;
    statusText: string;
  };
  stack: string;
};

export type TMeta = {
  current_page: number;
  from: number;
  last_page: number;
  links: TInnerLinks[];
  path: string;
  per_page: number;
  to: number;
  total: number;
};

export type TInnerLinks = {
  url: null;
  label: string;
  active: boolean;
};

export type TRoleTypes = 'super_admin' | 'admin' | 'director';

export type TGetParamItem = {
  id: number;
  name: string;
};

export type TGetParamsChange = {
  limit?: number;
  page: number;
  search?: string;
};

export type TLangType = {
  ltn: string;
  cyr: string;
};
