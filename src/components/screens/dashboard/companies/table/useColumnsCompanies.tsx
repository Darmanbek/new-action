import { ColumnsType } from "antd/es/table";
import { TDashboardCompany } from "src/services/index.types";
import { formatEmpty } from "src/utils";


export const useColumnsCompanies = () => {

	const columns: ColumnsType<TDashboardCompany> = [
		{
			ellipsis: false,
			width: 50,
			title: "№",
			dataIndex: "index",
			key: "index",
			render: (_v, _r, index) => index + 1
		},
		{
			ellipsis: true,
			title: "Название",
			dataIndex: "name",
			key: "name",
			render: formatEmpty
		},
		{
			ellipsis: true,
			title: "Админ",
			dataIndex: "admin",
			key: "admin",
			render: formatEmpty
		}
	];

	return columns;
};
