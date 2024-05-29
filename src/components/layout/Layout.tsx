import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./Header/Header";
import { Menu } from "./Menu/Menu";
import { Main } from "./Main/Main";

import { RequireAuth } from "src/hooks";

import styles from "./layout.module.scss";

const Layout: FC = () => {
	return (
		<section className={styles.layout}>
			<Header />
			<div className={styles["layout-has-menu"]}>
				<Menu />
				<Main>
					<Outlet />
				</Main>
			</div>
		</section>
	);
};

export default () => (
	<RequireAuth>
		<Layout />
	</RequireAuth>
);
