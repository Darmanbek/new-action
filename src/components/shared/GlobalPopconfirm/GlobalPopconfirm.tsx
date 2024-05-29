import { Popconfirm } from "antd";
import { PopconfirmProps } from "antd/lib";
import { FC } from "react";

const GlobalPopconfirm: FC<PopconfirmProps> = (props) => (
	<Popconfirm cancelText="Нет" okText="Да" placement="leftTop" {...props} />
);

export { GlobalPopconfirm };
