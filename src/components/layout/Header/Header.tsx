import { theme } from "antd";
import { HeaderLeft } from "./HeaderLeft/HeaderLeft";
import { HeaderRight } from "./HeaderRight/HeaderRight";
import styles from "./header.module.scss";

export const Header = () => {
	const { token } = theme.useToken();
	return (
		<header className={styles.header} style={{ backgroundColor: token.colorBgContainer }}>
			<HeaderLeft />
			<HeaderRight />
		</header>
	);
};
