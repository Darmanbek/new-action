import { ColumnsType } from "antd/es/table"
import { UiTag } from "src/components/ui"
// import { TDashboardAdmin } from "src/services/index.types";
import { formatEmpty, phoneFormatter } from "src/utils"


export const useColumnsAdmins = () => {

	const columns: ColumnsType<any> = [
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
			title: "Имя фамилия",
			key: "name",
			render: (_v, admin) => `${admin?.first_name} ${admin?.last_name}`,
		},
		{
			ellipsis: true,
			title: "Телефон",
			dataIndex: "phone",
			key: "phone",
			render: phoneFormatter
		},
		{
			ellipsis: true,
			title: "Филиал",
			dataIndex: "company",
			key: "company",
			render: (company) => company ? (
				<UiTag color={"red"}>
					{formatEmpty(company)}
				</UiTag>
			) : "-",
		},
	]

	return columns
}
