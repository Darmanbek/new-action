import { FC } from "react";
import clsx from "clsx";
import styles from "./logo.module.scss";

interface LogoProps {
	noTitle?: boolean;
	size?: "small" | "medium" | "large"
}

const Logo: FC<
	LogoProps &
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLDivElement>,
			HTMLDivElement
		>
> = (props) => {
	const { noTitle, className, size, ...rest } = props;

	return (
		<div className={clsx(styles.logo, className, size && styles[size])} {...rest}>
			<h1>New</h1>
			{!noTitle && <h2>Action</h2>}
		</div>
	);
};

export { Logo };
