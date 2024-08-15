import loadable from "@loadable/component";
import { createElement } from "react";

import { Loader } from "src/components/shared";

export const Finance = loadable(() => import("./finance/Finance"), {
	fallback: createElement(Loader)
});
export const FinanceDebtors = loadable(() => import("./debtors/FinanceDebtors"), {
	fallback: createElement(Loader)
});
export const FinanceCompanies = loadable(() => import("./companies/FinanceCompanies"), {
	fallback: createElement(Loader)
});
