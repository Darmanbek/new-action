import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import { Space } from "antd"
import type { ColumnsType } from "antd/es/table"
import { GlobalPopconfirm } from "src/components/shared"
import { UiTag, UiTooltipButton } from "src/components/ui"
import { type TAdmin, useDeleteAdminsMutation } from "src/services/admins"
import { useFormStorageStore } from "src/store"
import { phoneFormatter } from "src/utils"

export const useColumnsAdmins = () => {
	const { mutate: deleteAdmin } = useDeleteAdminsMutation()
	const setParamsForm = useFormStorageStore((state) => state.setParamsForm)
	const onEditAdmin = (item: TAdmin) => setParamsForm(item)

	const columns: ColumnsType<TAdmin> = [
		{
			ellipsis: true,
			title: "Имя Фамилия",
			dataIndex: "first_name",
			key: "name",
			render: (_v, r) => `${r.first_name} ${r.last_name}`
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
			render: (company: TAdmin["company"]) =>
				company ? <UiTag color={"red"}>{/*{formatEmpty(company?.name)}*/}</UiTag> : "-"
		},
		{
			fixed: "right",
			width: 100,
			title: "Действия",
			key: "action",
			render: (_, admin) => (
				<Space>
					<UiTooltipButton
						title={"Изменить"}
						shape={"circle"}
						type={"primary"}
						color={"orange"}
						showTitle={true}
						icon={<EditOutlined />}
						onClick={() => onEditAdmin(admin)}
						aria-label={"Edit"}
					/>
					<GlobalPopconfirm
						onConfirm={() => deleteAdmin(admin.id)}
						title={`${admin.first_name} ${admin.last_name}`}
					>
						<UiTooltipButton
							title={"Удалить"}
							shape={"circle"}
							type={"primary"}
							showTitle={true}
							danger={true}
							icon={<DeleteOutlined />}
							aria-label={"Delete"}
						/>
					</GlobalPopconfirm>
				</Space>
			)
		}
	]

	return columns
}
