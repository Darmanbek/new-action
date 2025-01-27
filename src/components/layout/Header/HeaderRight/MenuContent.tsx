import { SettingOutlined } from "@ant-design/icons"
import { Avatar, ConfigProvider, Divider, Flex, Spin } from "antd"
import { type FC, useEffect } from "react"
import { MdOutlineLogout } from "react-icons/md"
import { useLocation, useNavigate } from "react-router-dom"
import { Logo1, Logo2Edit } from "src/assets/images"
import { UiMenu } from "src/components/ui"
import { useGetMeQuery, useSignOutMutation } from "src/services/login"
import { useAuthPersistStore, useMenuStore } from "src/store"
import styles from "./right.module.scss"

const MenuContent: FC = () => {
	const { setProfileOpen } = useMenuStore()
	// const { isDark, onToggleTheme } = useThemeStore();
	const { signOut } = useAuthPersistStore()
	const { data: user } = useGetMeQuery()
	const { mutate: logout, isSuccess, isLoading, isError } = useSignOutMutation()
	const navigate = useNavigate()
	const { pathname } = useLocation()

	const onSelectMenuItem = (key: string) => {
		if (key === "/logout") {
			logout()
			return
		}
		navigate(key)
		setProfileOpen(false)
	}
	useEffect(() => {
		if (isSuccess || isError) {
			signOut()
			setProfileOpen(false)
		}
	}, [isError, isSuccess, setProfileOpen, signOut])
	return (
		<>
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
								backgroundColor: "transparent"
							}}
							shape={"circle"}
							src={<img src={Logo1} style={{ width: 48, height: 48 }} alt={"Logo"} />}
							alt={"avatar"}
						/>
					</ConfigProvider>
					<div className={styles.title}>
						<h4>{user ? `${user.data.first_name} ${user.data.last_name}` : "-"}</h4>
						<span>{user ? user.data.role : "-"}</span>
					</div>
				</Flex>
				<Divider plain={true} style={{ margin: "8px 0" }}></Divider>
				<div className={styles.logo}>
					<img src={Logo2Edit} alt={"Logo"} />
				</div>
				<UiMenu
					mode={"inline"}
					items={[
						{
							type: "divider",
							style: { margin: "8px 0" }
						},
						{
							key: "/profile",
							label: "Настройка аккаунта",
							icon: <SettingOutlined />
						},
						{
							type: "divider",
							style: { margin: "8px 0" }
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
							disabled: isLoading
						}
					]}
					selectedKeys={[pathname]}
					onSelect={(e) => onSelectMenuItem(e.key)}
				/>
			</div>
		</>
	)
}

export { MenuContent }
