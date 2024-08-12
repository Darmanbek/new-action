import loadable from "@loadable/component";
import { createElement } from "react";

import { Loader } from "src/components/shared";

export const FinanceDebtors = loadable(() => import("./debtors/FinanceDebtors"), {
	fallback: createElement(Loader, { fullPage: true })
});
export const FinanceProfits = loadable(() => import("./profits/FinanceProfits"), {
	fallback: createElement(Loader, { fullPage: true })
});
