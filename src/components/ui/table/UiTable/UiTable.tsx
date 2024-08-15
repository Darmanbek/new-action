import { ConfigProvider, Table, TableProps } from "antd";
import { useResponsive } from "src/hooks";
import uniqid from "uniqid";

export const UiTable = <T extends object>(props: TableProps<T>) => {
	const { isMobile } = useResponsive(768);
	const { style, scroll, pagination, ...rest } = props;

	return (
		<ConfigProvider
			theme={{
				components: {
					Table: {
						headerBg: "#fff",
						footerBg: "#fff",
						rowExpandedBg: "#fff",
						fontSize: isMobile ? 14 : 16,
						rowHoverBg: "#f7f5f5",
					},
					Dropdown: {
						fontSize: isMobile ? 14 : 16,
					},
				},
			}}
		>
			<Table
				rowKey={() => uniqid()}
				style={{
					boxShadow: "0px 2px 14px 2px rgba(229, 229, 229, .33)",
					...style,
				}}
				scroll={{ x: "auto", ...scroll }}
				pagination={
					pagination !== false
						? { position: ["bottomCenter"], ...pagination }
						: pagination
				}
				{...rest}
			/>
		</ConfigProvider>
	);
};
