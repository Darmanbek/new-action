import { FC } from "react";
import { App as AntdApp } from "antd"
import { Route, Routes } from "react-router-dom";

import { Layout } from "src/components/layout";
import { Auth } from "src/components/screens";
import { useRoutes } from "src/routes";

const App: FC = () => {
	const routes = useRoutes();
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{routes.map(({ path, element}) => (
          <Route key={path} path={path} element={element} />
        ))}
			</Route>
			<Route path="/login" element={<Auth />} />
		</Routes>
	);
};

export default () => (
	<AntdApp>
		<App />
	</AntdApp>
);
