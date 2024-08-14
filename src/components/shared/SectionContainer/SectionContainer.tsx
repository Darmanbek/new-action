import clsx from "clsx";
import { ComponentProps, FC } from "react";
import styles from "./section.container.module.scss";

const SectionContainer: FC<ComponentProps<"section">> = (props) => {
	const { className, ...rest } = props;

	return (
		<section className={clsx(styles.section, className)} {...rest} />
	);
};

export { SectionContainer };
