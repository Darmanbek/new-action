import { type  FC } from "react";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "src/providers";
import { routes } from "src/routes";

const App: FC = () => {
	
	return (
		<AuthProvider>
			<RouterProvider router={routes} />
		</AuthProvider>
	);
};

export { App };
