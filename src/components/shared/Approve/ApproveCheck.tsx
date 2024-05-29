import { FC } from "react";
import { Tag } from "antd";
import { BiCheckDouble, BiX } from "react-icons/bi";

interface IApproveCheck {
	isValue: boolean;
}

const ApproveCheck: FC<IApproveCheck> = ({ isValue }) => (
	<Tag
		icon={isValue ? <BiCheckDouble /> : <BiX />}
		color={isValue ? "green" : "red"}
	/>
);

export { ApproveCheck };
