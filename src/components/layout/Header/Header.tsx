import { FC } from "react";
import { HeaderLeft } from "./HeaderLeft/HeaderLeft";
import { HeaderRight } from "./HeaderRight/HeaderRight";
import styles from "./header.module.scss";

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<HeaderLeft />
			<HeaderRight />
		</header>
	);
};

export { Header };
