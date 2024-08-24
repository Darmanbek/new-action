import { Space, Tooltip, Avatar, Image } from "antd";
import type { ColumnsType } from "antd/es/table";
import { EditOutlined, DeleteOutlined, UserOutlined, EyeFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { GlobalPopconfirm } from "src/components/shared";
import { UiButton, UiTag } from "src/components/ui";
import { useDeleteTeachersMutation } from "src/services/index.api";
import { useFormStorageStore } from "src/store";
import { TTeacher } from "src/services/index.types";
import { formatEmpty, groupGrammar, phoneFormatter } from "src/utils";

export const useColumnsTeachers = () => {
	const navigate = useNavigate();
	const { mutate: deleteTeacher } = useDeleteTeachersMutation();
	const setParamsForm = useFormStorageStore((state) => state.setParamsForm);
	const onEditTeacher = (item: TTeacher) => setParamsForm(item);

	const columns: ColumnsType<TTeacher> = [
		{
			ellipsis: true,
			width: 0,
			title: "Аватар",
			dataIndex: "teacher_data",
			align: "center",
			key: "avatar",
			render: (avatar: TTeacher["teacher_data"]) => {
				if (avatar && avatar?.avatar) {
					return <Avatar src={<Image src={avatar?.avatar} />} alt="avatar" />;
				} else {
					return <Avatar icon={<UserOutlined />} alt="avatar" />;
				}
			},
		},
		{
			ellipsis: true,
			title: "Имя Фамилия",
			dataIndex: "name",
			key: "name",
			render: (_, r) => `${r?.first_name} ${r?.last_name}`,
		},
		{
			ellipsis: true,
			title: "Телефон",
			dataIndex: "phone",
			key: "phone",
			render: phoneFormatter,
		},
		// {
		// 	ellipsis: true,
		// 	title: "Филиал",
		// 	dataIndex: "company",
		// 	key: "company",
		// 	render: (company: TTeacher["company"]) => company.map(el => el.name).join(", "),
		// },
		{
			align: "center",
			ellipsis: true,
			title: "Группы",
			dataIndex: "group_count",
			key: "group_count",
			render: (group_count: number) => (
				<UiTag color={"red"}>
					{`${formatEmpty(group_count)} ${groupGrammar(group_count)}`}
				</UiTag>
			),
		},
		{
			fixed: "right",
			width: 100,
			title: "Действия",
			key: "action",
			render: (_, teacher) => (
				<Space onClick={(e) => e.stopPropagation()}>
					<Tooltip title="Смотреть">
						<UiButton
							shape={"circle"}
							icon={<EyeFilled />}
							onClick={() => navigate(`/teachers/${teacher.id}`)}
							aria-label={"View"}
						/>
					</Tooltip>
					<Tooltip title="Изменить">
						<UiButton
							shape={"circle"}
							type={"primary"}
							color={"orange"}
							icon={<EditOutlined />}
							onClick={() => onEditTeacher(teacher)}
							aria-label={"Edit"}
						/>
					</Tooltip>
					<GlobalPopconfirm
						onConfirm={() => deleteTeacher(teacher?.id)}
						title={`${teacher?.first_name} ${teacher?.last_name}`}
					>
						<Tooltip title="Удалить">
							<UiButton
								shape={"circle"}
								type={"primary"}
								danger={true}
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
