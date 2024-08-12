import { Spin } from "antd";
import clsx from "clsx";
import { FC } from "react";
import styles from "./loader.module.scss";

interface LoaderProps {
	fullPage?: boolean;
}

const Loader: FC<LoaderProps> = ({ fullPage }) => {

	return (
		<div className={clsx(styles.loader, fullPage && styles.full)}>
			<Spin />
		</div>
	);
};

export { Loader };