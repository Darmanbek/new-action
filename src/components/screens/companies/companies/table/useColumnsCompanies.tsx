import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import { Space, Tooltip } from "antd"
import type { ColumnsType } from "antd/es/table"
import { GlobalPopconfirm } from "src/components/shared"
import { UiButton } from "src/components/ui"
import { type TCompany, useDeleteCompaniesMutation } from "src/services/companies"
import { useFormStorageStore } from "src/store"
import { phoneFormatter } from "src/utils"

export const useColumnsCompanies = () => {
	const { mutate: deleteCompany } = useDeleteCompaniesMutation()
	const setParamsForm = useFormStorageStore((state) => state.setParamsForm)
	const onEditCompany = (item: TCompany) => setParamsForm(item)

	const columns: ColumnsType<TCompany> = [
		{
			ellipsis: true,
			title: "Название",
			dataIndex: "name",
			key: "name",
			render: (_v, r) => `${r?.name}`
		},
		{
			ellipsis: true,
			title: "Админ",
			dataIndex: "admin",
			key: "admin",
			render: (_v, r) => `${r?.admin?.first_name} ${r?.admin?.last_name}`
		},
		{
			ellipsis: true,
			title: "Телефон",
			dataIndex: "phone",
			key: "phone",
			render: (_phone, p) => phoneFormatter(p?.admin?.phone)
		},
		{
			fixed: "right",
			width: 100,
			title: "Действия",
			key: "action",
			render: (_, companies) => (
				<Space>
					<Tooltip title={"Изменить"}>
						<UiButton
							shape={"circle"}
							type={"primary"}
							color={"orange"}
							icon={<EditOutlined />}
							onClick={() => onEditCompany(companies)}
							aria-label={"Edit"}
						/>
					</Tooltip>
					<GlobalPopconfirm
						onConfirm={() => deleteCompany(companies.id)}
						title={`${companies.name} ${companies.name}`}
					>
						<Tooltip title={"Удалить"}>
							<UiButton
								shape={"circle"}
								type={"primary"}
								danger={true}
								icon={<DeleteOutlined />}
								aria-label={"Delete"}
							/>
						</Tooltip>
					</GlobalPopconfirm>
				</Space>
			)
		}
	]

	return columns
}
