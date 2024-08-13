import loadable from "@loadable/component";
import { createElement } from "react";

import { Loader } from "src/components/shared";

export const Message = loadable(() => import("./message/Message"), {
	fallback: createElement(Loader)
});
export const Chat = loadable(() => import("./chat/Chat"), {
	fallback: createElement(Loader)
});
