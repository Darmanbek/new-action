import { useEffect } from "react";
import { Divider, Popover, Space, Spin, Tooltip, Avatar, Flex, ConfigProvider } from "antd";
import Icon, {
	SettingOutlined,
} from "@ant-design/icons";
import { BsArrowsFullscreen } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import screenfull from "screenfull";
import { UiButton, UiMenu, UiSettingsButton } from "src/components/ui";
import { primaryColorText } from "src/data";
import { useAuthPersistStore, useMenuStore } from "src/store";
import { useGetMeQuery, useSignOutMutation } from "src/services/index.api";
import { Logo1, Logo2Edit } from "src/assets/images";
import styles from "./right.module.scss";

export const HeaderRight = () => {
	const { profileOpen, setProfileOpen } = useMenuStore();
	// const { isDark, onToggleTheme } = useThemeStore();
	const { signOut } = useAuthPersistStore();
	const { data: user } = useGetMeQuery();
	const { mutate: logout, isSuccess, isLoading } = useSignOutMutation();
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const onSelectMenuItem = (key: string) => {
		if (key === "/logout") {
			logout();
			return;
		}
		navigate(key);
		setProfileOpen(false);
	};

	const content = (
		<div className={styles.content}>
			<Flex gap={12} align={"center"}>
				<ConfigProvider
					theme={{
						components: {
							Avatar: {
								containerSize: 48
							}
						}
					}}
				>
					<Avatar
						style={{
							backgroundColor: "transparent",
						}}
						shape={"circle"}
						src={<img src={Logo1} style={{ width: 48, height: 48 }} alt="Logo" />}
						alt="avatar"
					/>
				</ConfigProvider>
				<div className={styles.title}>
					<h4>{user ? `${user.data.first_name} ${user.data.last_name}` : "-"}</h4>
					<span>
          {user ? user.data.role : "-"}
        </span>
				</div>
			</Flex>
			<Divider plain style={{ margin: "8px 0" }}></Divider>
			<div className={styles.logo}>
				<img src={Logo2Edit} alt="Logo" />
			</div>
			<UiMenu
				mode="inline"
				items={[
					{
						type: "divider",
						style: { margin: "8px 0" },
					},
					{
						key: "/profile",
						label: "Настройка аккаунта",
						icon: <SettingOutlined />,
					},
					{
						type: "divider",
						style: { margin: "8px 0" },
					},
					{
						key: "/logout",
						icon: isLoading ? null : <MdOutlineLogout />,
						label: isLoading ? (
							<div style={{ textAlign: "center" }}>
								<Spin />
							</div>
						) : (
							"Выйти"
						),
						disabled: isLoading,
					},
				]}
				selectedKeys={[pathname]}
				onSelect={(e) => onSelectMenuItem(e.key)}
			/>
		</div>
	);

	useEffect(() => {
		if (isSuccess) {
			signOut();
			setProfileOpen(false);
		}
	}, [isSuccess, setProfileOpen, signOut]);

	return (
		<div className={styles.right}>
			<Space>
				{/*<Tooltip placement="bottom" title={isDark ? "Тёмный" : "Светлый"} zIndex={1500}>*/}
				{/*	<UiButton*/}
				{/*		type="text"*/}
				{/*		shape={"circle"}*/}
				{/*		// className={styles.fullscreen}*/}
				{/*		onClick={onToggleTheme}*/}
				{/*		aria-label="theme"*/}
				{/*		icon={isDark ? <Icon component={BsMoon} /> : <Icon component={BsSun} />}*/}
				{/*	/>*/}
				{/*</Tooltip>*/}
				<Tooltip placement="bottom" title="Полный экран" zIndex={1500}>
					<UiButton
						type="text"
						colorText={primaryColorText}
						shape={"circle"}
						// className={styles.fullscreen}
						onClick={() => screenfull.toggle()}
						aria-label="fullscreen"
						icon={<Icon component={BsArrowsFullscreen} />}
					/>
				</Tooltip>
				<Popover
					open={profileOpen}
					trigger="click"
					placement="bottomLeft"
					arrow={false}
					content={content}
					onOpenChange={setProfileOpen}
				>
					<UiSettingsButton
						type="text"
						shape={"circle"}
						aria-label={"settings"}
						icon={
							<Avatar
								style={{
									backgroundColor: "transparent",
								}}
								shape={"circle"}
								src={<img src={Logo1} alt="Logo" />}
								alt="avatar"
							/>
						}
					/>
				</Popover>
			</Space>
		</div>
	);
};
