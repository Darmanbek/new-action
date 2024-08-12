import { TCompany, TGroup, TRoleTypes } from '../index.types';

export type TAcceptance = {
  id: string | number;
  is_acceptance: boolean;
  group: TGroup;
  student: TAcceptanceStudent;
};

export type TAcceptanceStudent = {
  id: string | number;
  role: TRoleTypes;
  last_name: string;
  phone: string;
  company: TCompany;
};
