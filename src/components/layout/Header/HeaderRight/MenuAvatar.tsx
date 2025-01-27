import { Avatar, Popover } from "antd"
import { type FC } from "react"
import { Logo1 } from "src/assets/images"
import { UiSettingsButton } from "src/components/ui"
import { useMenuStore } from "src/store"
import { MenuContent } from "./MenuContent"

const MenuAvatar: FC = () => {
	const { profileOpen, setProfileOpen } = useMenuStore()
	return (
		<>
			<Popover
				open={profileOpen}
				trigger={"click"}
				placement={"bottomLeft"}
				arrow={false}
				content={<MenuContent />}
				onOpenChange={setProfileOpen}
			>
				<UiSettingsButton
					type={"text"}
					shape={"circle"}
					aria-label={"settings"}
					icon={
						<Avatar
							style={{
								backgroundColor: "transparent"
							}}
							shape={"circle"}
							src={<img src={Logo1} alt={"Logo"} />}
							alt={"avatar"}
						/>
					}
				/>
			</Popover>
		</>
	)
}

export { MenuAvatar }
