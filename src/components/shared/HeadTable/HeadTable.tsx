import { ReactNode } from "react";
import { Space, theme } from "antd";
import styles from "./head.module.scss";

interface HeadTableProps {
	title: string;
	children?: ReactNode[];
	extra?: ReactNode[];
}

export const HeadTable = ({ children, extra, title }: HeadTableProps) => {
	const { token } = theme.useToken();

	return (
		<div className={styles.head} style={{ backgroundColor: token.colorBgContainer }}>
			<h3>{title}</h3>
			<Space align="start">
				{children?.map((child, index) => <div key={index}>{child}</div>)}
				{extra?.map((child, index) => <div key={index}>{child}</div>)}
			</Space>
		</div>
	);
};
