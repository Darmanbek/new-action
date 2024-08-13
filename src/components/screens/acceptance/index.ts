import loadable from "@loadable/component";
import { createElement } from "react";

import { Loader } from "src/components/shared";

export const Acceptance = loadable(() => import("./acceptance/Acceptance"), {
	fallback: createElement(Loader)
});
