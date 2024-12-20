import loadable from "@loadable/component";
import { RouteObject } from "react-router-dom";
import { Loader } from "src/components/shared";
import { ROUTES } from "src/config";

// eslint-disable-next-line react-refresh/only-export-components
const Companies = loadable(() => import("./index.lazy"), {
	fallback: <Loader />
});

export const layoutCompaniesRoute: RouteObject = {
	path: ROUTES.COMPANIES,
	element: <Companies />
};


