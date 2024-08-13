import loadable from "@loadable/component";
import { createElement } from "react";

import { Loader } from "src/components/shared";

export const Admin = loadable(() => import("./admin/Admin"), {
	fallback: createElement(Loader)
});
