import { Space, Tag, Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";
import { BiEditAlt, BiTrashAlt } from 'react-icons/bi';
import { GlobalPopconfirm } from 'src/components/shared';
import { UiButton } from 'src/components/ui';
import { useDeleteTeachersMutation } from 'src/services';
import { TUser } from 'src/services/index.types';
import { useFormStorageStore } from 'src/store';
import { phoneFormatter, roleColor } from "src/utils";

export const useColumnsTeacher = () => {

	const {
		mutate: deleteTeacher,
	} = useDeleteTeachersMutation()

	const setParamsForm = useFormStorageStore(state => state.setParamsForm)

	const onEditTeacher = (item: TUser) => setParamsForm(item)

	const columns: ColumnsType<TUser> = [
		{
			ellipsis: true,
			title: "Имя Фамилия",
			dataIndex: "name",
			key: "name",
			render: (_v, r) => `${r.first_name} ${r.last_name}`
		},
		{
			ellipsis: true,
			title: "Телефон",
			dataIndex: "phone",
			key: "phone",
			render: (phone) => phoneFormatter(phone),
		},
		{
			title: "Роль",
			dataIndex: "role",
			key: "role",
			render: (role: string) => (
				<>
					<Tag color={roleColor(2)}>
						{role}
					</Tag>
				</>
			),
		},
		{
			fixed: "right",
			width: 100,
			title: "Действия",
			key: "action",
			render: (_, teacher) => (
				<Space>
					<Tooltip title="Изменить">
						<UiButton
							type="primary"
							color="orange"
							icon={<BiEditAlt />}
							onClick={() => onEditTeacher(teacher)}
							aria-label="Edit"
						/>
					</Tooltip>
					<GlobalPopconfirm
						onConfirm={() => deleteTeacher(teacher.id)}
						title={`${teacher.first_name} ${teacher.last_name}`}
					>
						<Tooltip title="Удалить">
							<UiButton type="primary" danger icon={<BiTrashAlt />} aria-label="Delete" />
						</Tooltip>
					</GlobalPopconfirm>
				</Space>
			),
		},
	];

	return columns;
};
