import loadable from "@loadable/component";
import { RouteObject } from "react-router-dom";
import { Loader } from "src/components/shared";

// eslint-disable-next-line react-refresh/only-export-components
const Holiday = loadable(() => import("./index.lazy"), {
	fallback: <Loader />
});

export const layoutHolidayRoute: RouteObject = {
	path: "/holiday",
	element: <Holiday />,
};

