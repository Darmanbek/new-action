import { Space, Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { GlobalPopconfirm } from "src/components/shared";
import { UiButton } from "src/components/ui";
import { useDeleteAdminsMutation } from "src/services/index.api";
import { useFormStorageStore } from "src/store";
import { phoneFormatter } from "src/utils";
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
		// {
		//     ellipsis: true,
		//     title: 'Филиал',
		//     dataIndex: '',
		//     key: 'branch',
		//     render: (branch) => {
		//         if (branch) `${branch}`;
		//         else return null;
		//     },
		// },
		{
			fixed: "right",
			width: 100,
			title: "Действия",
			key: "action",
			render: (_, admin) => (
				<Space>
					<Tooltip title="Изменить">
						<UiButton
							type="primary"
							color="orange"
							icon={<EditOutlined />}
							onClick={() => onEditAdmin(admin)}
							aria-label="Edit"
						/>
					</Tooltip>
					<GlobalPopconfirm
						onConfirm={() => deleteAdmin(admin.id)}
						title={`${admin.first_name} ${admin.last_name}`}
					>
						<Tooltip title="Удалить">
							<UiButton
								type="primary"
								danger
								icon={<DeleteOutlined />}
								aria-label="Delete"
							/>
						</Tooltip>
					</GlobalPopconfirm>
				</Space>
			),
		},
	];

	return columns;
};
