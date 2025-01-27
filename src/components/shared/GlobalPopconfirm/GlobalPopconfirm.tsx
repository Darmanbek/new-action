import { Popconfirm } from "antd"
import { PopconfirmProps } from "antd/lib"
import React from "react"

export const GlobalPopconfirm = (props: React.PropsWithChildren<PopconfirmProps>) => (
	<Popconfirm cancelText={"Нет"} okText={"Да"} placement={"leftTop"} {...props} />
)
