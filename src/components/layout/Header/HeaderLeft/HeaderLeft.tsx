import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { Flex } from "antd"
import useSize from "antd/es/config-provider/hooks/useSize"
import { SizeType } from "antd/es/config-provider/SizeContext"
import { HeadCompanies } from "src/components/shared"
import { UiButton } from "src/components/ui"
import { primaryColorText } from "src/data"
import { useAuth, useResponsive } from "src/hooks"
import { useGetMeQuery } from "src/services/login"
import { useMenuStore } from "src/store"
import styles from "./left.module.scss"

export const HeaderLeft = () => {
	const { isDirector } = useAuth()
	const { collapsed, toggleCollapsed, open, toggleOpen } = useMenuStore()
	const { isMobile } = useResponsive(768)
	const size = useSize<SizeType>()
	const isLarge = size === "large"

	const { data: profile } = useGetMeQuery()

	const active = isMobile ? open : collapsed
	const onToggleActive = isMobile ? toggleOpen : toggleCollapsed

	const onToggleMenu = () => {
		onToggleActive()
	}

	const MenuIcon = active ? MenuUnfoldOutlined : MenuFoldOutlined

	return (
		<div className={styles.left}>
			<UiButton
				type={"text"}
				icon={<MenuIcon />}
				colorText={primaryColorText}
				onClick={onToggleMenu}
				shape={"circle"}
				aria-label={"burger"}
			/>
			{isDirector ? (
				<HeadCompanies />
			) : (
				profile?.data.company && (
					<Flex align={"center"} justify={"center"}>
						<h3
							style={{
								color: primaryColorText,
								fontSize: isLarge ? 16 : 14,
								textTransform: "uppercase"
							}}
						>
							{profile?.data?.company?.name}
						</h3>
					</Flex>
				)
			)}
		</div>
	)
}
