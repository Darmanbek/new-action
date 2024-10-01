import loadable from "@loadable/component";
import { createElement } from "react";

import { Loader } from "src/components/shared";

export const Story = loadable(() => import("./story/Story"), {
	fallback: createElement(Loader)
});
