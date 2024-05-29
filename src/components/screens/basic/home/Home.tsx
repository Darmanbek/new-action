import { FC } from "react";

import { Logo } from "src/components/shared";

import styles from "./home.module.scss";

const Home: FC = () => {
	return (
		<section className={styles.home}>
			<Logo size="large" />
		</section>
	);
};

export { Home };
