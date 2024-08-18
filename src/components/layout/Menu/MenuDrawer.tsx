import { FC, PropsWithChildren } from "react";
import { Logo2Edit } from "src/assets/images";
import { UiDrawer } from "src/components/ui";
import { useMenuStore } from "src/store";
import styles from "./menu.module.scss";

export const MenuDrawer: FC<PropsWithChildren> = ({ children }) => {
	const open = useMenuStore((state) => state.open);
	const toggleOpen = useMenuStore((state) => state.toggleOpen);


	return (
		<UiDrawer
			open={open}
			onClose={toggleOpen}
			placement="left"
			padding={0}
			className={styles["menu-drawer"]}
			width={260}
			closable={false}
			title={
				<div className={styles.logo}>
					<img src={Logo2Edit} alt="Logo" />
				</div>
			}
		>
			{children}
		</UiDrawer>
	);
};
