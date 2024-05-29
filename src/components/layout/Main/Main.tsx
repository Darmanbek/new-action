import { FC, ReactNode } from "react";
import styles from "./main.module.scss";
import { useMenuStore } from 'src/store';
import clsx from 'clsx';

const Main: FC<{children?: ReactNode}> = ({ children }) => {
	const collapsed = useMenuStore(state => state.collapsed);
	return (
		<main className={clsx(styles.main, collapsed && styles.collapsed)}>
			{children}
		</main>
	);
};

export { Main };
