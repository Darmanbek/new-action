import { App as AntdApp } from "antd";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "src/components/layout";
import { Auth, Privacy } from "src/components/screens";
import { useRoutes } from "./routes";

// eslint-disable-next-line react-refresh/only-export-components
const App: FC = () => {
	const routes = useRoutes();
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{routes.map((route, index) => (
					<Route key={index} {...route} />
				))}
			</Route>
			<Route path={"/login"} element={<Auth />} />
			<Route path={"/privacy"} element={<Privacy />} />
		</Routes>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export default () => (
	<AntdApp>
		<App />
	</AntdApp>
);
