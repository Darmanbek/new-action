import React from "react";
import { Tag } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { useResponsive } from "src/hooks";

interface IApproveCheck {
	isValue: boolean;
}

export const ApproveCheck = ({
	isValue,
}: React.PropsWithChildren<IApproveCheck>) => {
	const { isMobile } = useResponsive(768);
	return (
		<Tag
			style={{
				paddingBlock: 5,
			}}
			icon={
				isValue ?
					<IoCheckmarkDoneSharp style={{ fontSize: isMobile ? 16 : 18 }} />
					:
					<CloseOutlined style={{ fontSize: isMobile ? 16 : 18 }} />
			}
			color={isValue ? "green" : "red"}
		/>
	);
};
