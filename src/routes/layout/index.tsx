import { RouteObject } from "react-router-dom";
import { Logo3 } from "src/assets/images";
import styles from "./home.module.scss";

export const layoutIndexRoute: RouteObject = {
	index: true,
	element: <LayoutIndex />
};

// eslint-disable-next-line react-refresh/only-export-components
function LayoutIndex() {
	return (
		<section className={styles.home}>
			<img src={Logo3} alt="Logo" />
		</section>
	);
}
