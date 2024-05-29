import { ConfigProvider, Table, TableProps } from "antd";
import { FC } from "react";
import uniqid from "uniqid";

const UiTable: FC<TableProps> = (props) => {
	return (
		<ConfigProvider
			theme={{ components: { Table: { headerBg: "#fff" } } }}
		>
			<Table
				rowKey={() => uniqid()}
				scroll={{ x: "auto" }}
				pagination={{ position: ["bottomCenter"] }}
				{...props}
			/>
		</ConfigProvider>
	);
};

export { UiTable };
