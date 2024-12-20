import { Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { GlobalPopconfirm } from "src/components/shared";
import { UiTag, UiTooltipButton } from "src/components/ui";
import { useDeleteAdminsMutation } from "src/services/index.api";
import { useFormStorageStore } from "src/store";
import { formatEmpty, phoneFormatter } from "src/utils";
import { TAdmin } from "src/services/index.types";

export const useColumnsAdmin = () => {
	const { mutate: deleteAdmin } = useDeleteAdminsMutation();
	const setParamsForm = useFormStorageStore((state) => state.setParamsForm);
	const onEditAdmin = (item: TAdmin) => setParamsForm(item);
	
	const columns: ColumnsType<TAdmin> = [
		{
			ellipsis: true,
			title: "Имя Фамилия",
			dataIndex: "first_name",
			key: "name",
			render: (_v, r) => `${r.first_name} ${r.last_name}`,
		},
		{
			ellipsis: true,
			title: "Телефон",
			dataIndex: "phone",
			key: "phone",
			render: phoneFormatter,
		},
		{
			ellipsis: true,
			title: "Филиал",
			dataIndex: "company",
			key: "company",
			render: (company: TAdmin["company"]) => company ? (
				<UiTag color={"red"}>
					{formatEmpty(typeof company !== "string" ? company?.name : company)}
				</UiTag>
			) : "-",
		},
		{
			fixed: "right",
			width: 100,
			title: "Действия",
			key: "actions",
			render: (_, admin) => (
				<Space>
					<UiTooltipButton
						title="Изменить"
						shape={"circle"}
						type="primary"
						color="orange"
						showTitle={true}
						icon={<EditOutlined />}
						onClick={() => onEditAdmin(admin)}
						aria-label="Edit"
					/>
					<GlobalPopconfirm
						onConfirm={() => deleteAdmin(admin.id)}
						title={`${admin.first_name} ${admin.last_name}`}
					>
						<UiTooltipButton
							title="Удалить"
							shape={"circle"}
							type="primary"
							showTitle={true}
							danger
							icon={<DeleteOutlined />}
							aria-label="Delete"
						/>
					</GlobalPopconfirm>
				</Space>
			),
		},
	];
	
	return columns;
};
