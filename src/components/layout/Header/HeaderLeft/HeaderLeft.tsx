import { FC } from "react";
import { UiButton } from "src/components/ui";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Logo } from "src/components/shared";
import { useMenuStore } from "src/store";
import { useResponsive } from "src/hooks";
import styles from "./left.module.scss";

const HeaderLeft: FC = () => {
	const { collapsed, toggleCollapsed, open, toggleOpen } = useMenuStore();
	const { isMobile } = useResponsive(768);

	const active = isMobile ? open : collapsed;
	const onToggleActive = isMobile ? toggleOpen : toggleCollapsed;

	const onToggleMenu = () => {
		onToggleActive();
	};

	const MenuIcon = active ? (
		<MenuUnfoldOutlined className={styles.icon} />
	) : (
		<MenuFoldOutlined className={styles.icon} />
	);
	return (
		<div className={styles.left}>
			{!isMobile && <Logo />}
			<UiButton
				className={styles.burger}
				borderRadius={8}
				type="primary"
				icon={MenuIcon}
				onClick={onToggleMenu}
				aria-label="burger"
			/>
		</div>
	);
};

export { HeaderLeft };
