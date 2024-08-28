export type TBalance = {
  id: string;
  total_amount: string;
  balance_recharge: TBalanceRecharge;
};

export type TBalanceChange = {
  student_id: string | number;
  payment_type_id: string | number;
  amount: number;
  group_id: number | string;
};

export type TBalanceRecharge = {
  id: string;
  deadline: string;
  is_filled: boolean;
};
