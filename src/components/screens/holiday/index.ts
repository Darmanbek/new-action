import loadable from "@loadable/component";
import { createElement } from "react";

import { Loader } from "src/components/shared";

export const Holiday = loadable(() => import("./holiday/Holiday"), {
	fallback: createElement(Loader)
});
