import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Menu } from "./Menu/Menu";
import { Main } from "./Main/Main";
import { RequireAuth } from "src/hooks";
import styles from "./layout.module.scss";

// eslint-disable-next-line react-refresh/only-export-components
const Layout: FC = () => {
	return (
		<section className={styles.layout}>
			<Menu />
			<div className={styles["layout-has-menu"]}>
				<Header />
				<Main>
					<Outlet />
				</Main>
			</div>
		</section>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export default () => (
	<RequireAuth>
		<Layout />
	</RequireAuth>
);
