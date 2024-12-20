import { Outlet, RouteObject } from "react-router-dom";
import { ROUTES } from "src/config";
import { RootError } from "src/routes/error";
import { layoutRoute } from "src/routes/layout/layout";
import { loginRoute } from "src/routes/login";
import { privacyRoute } from "src/routes/privacy";

export const rootRoute: RouteObject = {
	path: ROUTES.ROOT,
	errorElement: <RootError />,
	id: "root",
	element: <Root />,
	children: [
		layoutRoute,
		loginRoute,
		privacyRoute
	]
};

// eslint-disable-next-line react-refresh/only-export-components
function Root() {
	return (
		<>
			<Outlet />
		</>
	);
}
