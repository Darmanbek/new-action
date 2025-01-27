import { CloseOutlined } from "@ant-design/icons"
import { Tag, TagProps } from "antd"
import React from "react"
import { IoCheckmarkDoneSharp } from "react-icons/io5"
import { useResponsive } from "src/hooks"

interface IApproveCheck {
	isValue: boolean
	showIcon?: boolean
	yesText: string
	noText: string
	colorInverse?: boolean
}

export const ApproveCheckValue = (props: React.PropsWithChildren<IApproveCheck & TagProps>) => {
	const { isValue, showIcon, yesText, noText, colorInverse, ...rest } = props
	const { isMobile } = useResponsive(768)
	return (
		<Tag
			style={{
				paddingBlock: 5
			}}
			icon={
				showIcon ? (
					isValue ? (
						<IoCheckmarkDoneSharp style={{ fontSize: isMobile ? 16 : 18 }} />
					) : (
						<CloseOutlined style={{ fontSize: isMobile ? 16 : 18 }} />
					)
				) : null
			}
			color={
				isValue ? (colorInverse ? "green-inverse" : "green") : colorInverse ? "red-inverse" : "red"
			}
			{...rest}
		>
			{isValue ? yesText : noText}
		</Tag>
	)
}
