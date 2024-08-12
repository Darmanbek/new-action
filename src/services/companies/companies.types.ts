import { TAdmin } from '../admin/admin.types';
import { TGroup } from '../groups/groups/groups.types';

export type TCompany = {
  id: string;
  name: string;
  admin: TAdmin;
  groups: TGroup[];
};

export type TCompanyChange = {
  id?: string;
  name: string;
  admin_id: string;
};
