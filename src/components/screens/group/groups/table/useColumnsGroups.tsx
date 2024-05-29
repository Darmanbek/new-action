import { Space, Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";
import { BiEditAlt, BiTrashAlt } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ApproveCheck, GlobalPopconfirm } from "src/components/shared";
import { UiButton } from "src/components/ui";
import { useDeleteGroupsMutation } from "src/services";
import { TGroup, TTeacher } from "src/services/index.types";
import { useFormStorageStore } from "src/store";
import { phoneFormatter, priceFormatter } from "src/utils";

export const useColumnsGroups = () => {
	const navigate = useNavigate();

	const { mutate: deleteGroups } = useDeleteGroupsMutation();

	const setParamsForm = useFormStorageStore((state) => state.setParamsForm);

	const onEditGroups = (item: TGroup) => setParamsForm(item);

	const columns: ColumnsType<TGroup> = [
		{
			ellipsis: true,
			title: "Название",
			dataIndex: "name",
			key: "name",
		},
		{
			ellipsis: true,
			title: "Учитель",
			dataIndex: "teachers",
			key: "teachers",
			render: (teachers: TTeacher[]) =>
				teachers.find((el) => !el.assistant)?.name || "-",
		},
		{
			ellipsis: true,
			title: "Ассистент",
			dataIndex: "teachers",
			key: "teachers",
			render: (teachers: TTeacher[]) =>
				teachers.find((el) => el.assistant)?.name || "-",
		},
		{
			ellipsis: true,
			title: "Описание",
			dataIndex: "description",
			key: "description",
		},
		{
			title: "Сумма",
			dataIndex: "price",
			key: "price",
			render: priceFormatter,
		},
		{
			align: "center",
			title: "Завершено",
			dataIndex: "is_completed",
			key: "is_completed",
			render: (is_completed: boolean) => (
				<ApproveCheck isValue={is_completed} />
			),
		},
		{
			align: "center",
			title: "Студенты",
			key: "students",
			render: (_v, groups) => (
				<Tooltip title="Смотреть">
					<UiButton
						type="primary"
						icon={<FaEye />}
						onClick={() => navigate(`/groups/${groups.id}/students`)}
						aria-label="Group"
					/>
				</Tooltip>
			),
		},
		{
			align: "center",
			title: "Задания",
			key: "lessons",
			render: (_v, groups) => (
				<Tooltip title="Смотреть">
					<UiButton
						type="primary"
						icon={<FaEye />}
						onClick={() => navigate(`/groups/${groups.id}/lessons`)}
						aria-label="Group"
					/>
				</Tooltip>
			),
		},
		{
			fixed: "right",
			align: "center",
			width: 150,
			title: "Действия",
			key: "action",
			render: (_, groups) => (
				<Space>
					<Tooltip title="Изменить">
						<UiButton
							type="primary"
							color="orange"
							icon={<BiEditAlt />}
							onClick={() => onEditGroups(groups)}
							aria-label="Edit"
						/>
					</Tooltip>
					<GlobalPopconfirm
						onConfirm={() => deleteGroups(groups.id)}
						title={groups.name}
					>
						<Tooltip title="Удалить">
							<UiButton
								type="primary"
								danger
								icon={<BiTrashAlt />}
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
