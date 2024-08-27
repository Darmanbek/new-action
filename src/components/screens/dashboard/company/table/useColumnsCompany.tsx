import { CheckOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import { UiBadge, UiTooltipButton } from "src/components/ui";
import { TDashboardCompany } from "src/services/index.types";
import { useAuthPersistStore } from "src/store";
import { formatEmpty } from "src/utils";


export const useColumnsCompany = () => {
	const { company, toCompany } = useAuthPersistStore();

	const columns: ColumnsType<TDashboardCompany> = [
		{
			width: 50,
			ellipsis: true,
			title: "№",
			dataIndex: "index",
			key: "index",
			render: (_v, r, index) => (
				<UiBadge status={company?.id === r.id ? "processing" : "warning"} text={index + 1} />
			),
		},
		{
			ellipsis: true,
			title: "Название",
			dataIndex: "name",
			key: "name",
			render: formatEmpty,
		},
		{
			ellipsis: true,
			title: "Админ",
			dataIndex: "admin",
			key: "admin",
			render: (admin: TDashboardCompany["admin"]) => `${admin.first_name} ${admin.last_name}`,
		},
		{
			align: "center",
			ellipsis: false,
			width: 50,
			title: "Действия",
			key: "actions",
			render: (_v, r) => (
				<UiTooltipButton
					color={"green"}
					disabled={r.id === company?.id}
					shape={"circle"}
					type={"primary"}
					title={r.id === company?.id ? "" : "Выбрать"}
					showTitle={true}
					icon={<CheckOutlined />}
					onClick={() => toCompany(r)}
				/>
			),
		},
	];

	return columns;
};
