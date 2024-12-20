import { type  FC, type PropsWithChildren } from "react";
import styles from "./inner.layout.module.scss";

const InnerLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles["layout-has-menu"]}>
			{children}
		</div>
	);
};

export { InnerLayout };
