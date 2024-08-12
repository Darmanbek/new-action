import loadable from "@loadable/component";
import { createElement } from "react";

import { Loader } from "src/components/shared";

export const Groups = loadable(() => import("./groups/Groups"), {
	fallback: createElement(Loader, { fullPage: true })
});
export const Lessons = loadable(() => import("./lessons/Lessons"), {
	fallback: createElement(Loader, { fullPage: true })
});

export * from "./students";
