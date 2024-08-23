import { UiButton, UiTag } from "src/components/ui";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { primaryColorText } from "src/data";
import { useGetMeQuery } from "src/services/auth/auth.api";
import { useMenuStore } from "src/store";
import { useResponsive } from "src/hooks";
import styles from "./left.module.scss";

export const HeaderLeft = () => {
	const { collapsed, toggleCollapsed, open, toggleOpen } = useMenuStore();
	const { isMobile } = useResponsive(768);
	const { data: profile } = useGetMeQuery();

	const active = isMobile ? open : collapsed;
	const onToggleActive = isMobile ? toggleOpen : toggleCollapsed;

	const onToggleMenu = () => {
		onToggleActive();
	};

	const MenuIcon = active ? MenuUnfoldOutlined : MenuFoldOutlined;

	return (
		<div className={styles.left}>
			<UiButton
				type="text"
				icon={<MenuIcon />}
				colorText={primaryColorText}
				onClick={onToggleMenu}
				shape={"circle"}
				aria-label="burger"
			/>
			{profile?.data.company && (
				<UiTag
					color={"transparent"}
					bordered={false}
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<h3 style={{ color: primaryColorText, textTransform: "uppercase" }}>
						{profile?.data?.company?.name}
					</h3>
				</UiTag>
			)}
		</div>
	);
};
