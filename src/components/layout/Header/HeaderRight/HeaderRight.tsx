import Icon from "@ant-design/icons"
import { Space, Tooltip } from "antd"
import { BsArrowsFullscreen } from "react-icons/bs"
import screenfull from "screenfull"
import { UiButton } from "src/components/ui"
import { primaryColorText } from "src/data"
import { MenuAvatar } from "./MenuAvatar"
import styles from "./right.module.scss"

export const HeaderRight = () => {
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
				<Tooltip placement={"bottom"} title={"Полный экран"} zIndex={1500}>
					<UiButton
						type={"text"}
						colorText={primaryColorText}
						shape={"circle"}
						// className={styles.fullscreen}
						onClick={() => screenfull.toggle()}
						aria-label={"fullscreen"}
						icon={<Icon component={BsArrowsFullscreen} />}
					/>
				</Tooltip>
				<MenuAvatar />
			</Space>
		</div>
	)
}
