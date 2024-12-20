import loadable from "@loadable/component";
import { RouteObject } from "react-router-dom";
import { Loader } from "src/components/shared";
import { ROUTES } from "src/config";

// eslint-disable-next-line react-refresh/only-export-components
const Dashboard = loadable(() => import("./index.lazy"), {
	fallback: <Loader />
});

export const layoutDashboard: RouteObject = {
	path: ROUTES.DASHBOARD,
	element: <Dashboard />
};
