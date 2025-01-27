import { CloseOutlined } from "@ant-design/icons"
import { Tag } from "antd"
import React from "react"
import { IoCheckmarkDoneSharp } from "react-icons/io5"
import { useResponsive } from "src/hooks"

interface IApproveCheck {
	isValue: boolean
}

export const ApproveCheck = ({ isValue }: React.PropsWithChildren<IApproveCheck>) => {
	const { isMobile } = useResponsive(768)
	return (
		<Tag
			style={{
				paddingBlock: 5
			}}
			icon={
				isValue ? (
					<IoCheckmarkDoneSharp style={{ fontSize: isMobile ? 16 : 18 }} />
				) : (
					<CloseOutlined style={{ fontSize: isMobile ? 16 : 18 }} />
				)
			}
			color={isValue ? "green" : "red"}
		/>
	)
}
