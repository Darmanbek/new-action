import loadable from "@loadable/component";
import { createElement } from "react";

import { Loader } from "src/components/shared";

export const Company = loadable(() => import("./company/Company"), {
	fallback: createElement(Loader)
});
