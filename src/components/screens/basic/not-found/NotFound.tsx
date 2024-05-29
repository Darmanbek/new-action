import { FC } from "react";
import { Result } from "antd";

import styles from "./not.found.module.scss";

const NotFound: FC = () => {
	return (
		<div className={styles["not-found"]}>
			<Result
				className={styles.result}
				status="404"
				title="404"
				subTitle="Страница не найдена."
			/>
		</div>
	);
};

export { NotFound };
