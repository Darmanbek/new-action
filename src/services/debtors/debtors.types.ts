import { TBalanceRecharge, TGroup, TStudent } from "src/services/index.types";

export type TFinanceDebtors = {
  first_name: string;
  last_name: string;
  phone: string | number;

  id: string;
  balance: string;
  student: Pick<TStudent, "id" | "first_name" | "last_name" | "phone">;
  group: Pick<TGroup, "id" | "name" | "start_date">;
  balance_recharge: TBalanceRecharge;
};
