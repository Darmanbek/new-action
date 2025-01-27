import { LoadingOutlined } from "@ant-design/icons"
import type { InputProps } from "antd"
import { ConfigProvider, Input, InputRef, Popover } from "antd"
import EmojiPicker, { EmojiClickData, Theme } from "emoji-picker-react"
import { FC, RefAttributes, useCallback } from "react"
import { BsEmojiSmile } from "react-icons/bs"
import { IoSend } from "react-icons/io5"

interface UiInputChatProps {
	loading?: boolean
	value?: string
	onChange?: (value: string) => void
}

const UiInputChat: FC<InputProps & RefAttributes<InputRef> & UiInputChatProps> = (props) => {
	const { loading = false, value, onChange, ...rest } = props

	const onHandleMessage = useCallback(
		(message: string) => {
			if (onChange) {
				onChange(message)
			}
		},
		[onChange]
	)

	const onEmojiMessage = useCallback(
		(emoji: EmojiClickData) => {
			onHandleMessage(value + emoji.emoji)
		},
		[onHandleMessage, value]
	)

	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: "royalblue"
				}
			}}
		>
			<Input
				autoFocus={true}
				value={value}
				onChange={(e) => onHandleMessage(e.target.value)}
				prefix={
					<Popover
						content={<EmojiPicker theme={Theme.LIGHT} onEmojiClick={onEmojiMessage} />}
						trigger={"click"}
					>
						<BsEmojiSmile
							onClick={(e) => e.stopPropagation()}
							color={"royalblue"}
							style={{ fontSize: 21 }}
						/>
					</Popover>
				}
				suffix={
					loading ? (
						<LoadingOutlined spin={true} />
					) : (
						<button
							type={"submit"}
							onClick={(e) => {
								e.stopPropagation()
							}}
						>
							<IoSend color={"royalblue"} style={{ fontSize: 21, cursor: "pointer" }} />
						</button>
					)
				}
				{...rest}
			/>
		</ConfigProvider>
	)
}

export { UiInputChat }
