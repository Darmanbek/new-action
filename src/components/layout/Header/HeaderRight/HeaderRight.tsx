import { FC, ReactNode, useEffect } from "react";
import { Divider, Popover, Space, Spin, Tag, Tooltip } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { BsArrowsFullscreen } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";
import screenfull from "screenfull";

import { Logo } from "src/components/shared";
import { UiButton, UiMenu } from "src/components/ui";
import { useAuthPersistStore, useMenuStore } from "src/store";
import {
	useGetMeQuery,
	useSignOutMutation,
} from "src/services";

import styles from "./right.module.scss";
import { getDayTime } from 'src/utils/generate';

const HeaderRight: FC = () => {
	const { profileOpen, setProfileOpen } = useMenuStore();
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

	

	const content: ReactNode = (
		<div className={styles.content}>
			<div className={styles.title}>
				<h4>{getDayTime()}</h4>
				<span>{user ? `${user.data.first_name} ${user.data.last_name}` : "-"}</span>
			</div>
			<Divider plain style={{ margin: "15px 0" }}>
				<p className={styles.role}>
					<Tag color="green">{user ? user.data.role : "-"}</Tag>
				</p>
			</Divider>
			<div className={styles.logo}>
				<Logo />
			</div>
			<UiMenu
				mode="inline"
				items={[
					{
						type: "divider",
						style: { margin: "15px 0" },
					},
					{
						key: "/profile",
						label: "Настройка аккаунта",
						icon: <FiSettings />,
					},
					{
						key: "/logout",
						icon: isLoading ? null : <LuLogOut />,
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
				onSelect={(e: any) => onSelectMenuItem(e.key)}
			/>
		</div>
	);

	useEffect(() => {
		if (isSuccess) {
			signOut()
			setProfileOpen(false);
		};
	}, [isSuccess]);
	return (
		<div className={styles.right}>
			<Space>
				<Tooltip placement="bottom" title="Полный экран" zIndex={1500}>
					<UiButton
						type="primary"
						className={styles.fullscreen}
						borderRadius={8}
						onClick={() => screenfull.toggle()}
						aria-label="fullscreen"
						icon={<BsArrowsFullscreen />}
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
					<UiButton
						type="primary"
						aria-label="settings"
						className={styles.settings}
						borderRadius={27}
					>
						<Logo noTitle className={styles.logo} />
						<FiSettings />
					</UiButton>
				</Popover>
			</Space>
		</div>
	);
};

export { HeaderRight };
