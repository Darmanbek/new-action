import { TCompany } from '../index.types';

export type TAdmin = {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  company: TCompany | null;
};

export type TAdminChange = {
  id?: string;
  first_name: string;
  last_name: string;
  phone: string;
  password: string | number;
};
