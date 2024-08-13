import loadable from "@loadable/component";
import { createElement } from "react";

import { Loader } from "src/components/shared";

export const Teacher = loadable(() => import("./teacher/Teacher"), {
	fallback: createElement(Loader)
});
