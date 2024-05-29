import { Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";
import { MdOutlineAutoDelete } from "react-icons/md";
import { ApproveCheck } from "src/components/shared";
import { UiButton } from "src/components/ui";
// import { useCreateGroupsLessonMutation } from "src/services";
import { TLesson } from "src/services/index.types";
import { useFormStorageStore } from 'src/store';
import { formatEmpty, priceFormatter } from "src/utils";

export const useColumnsGroup = () => {
	// const { mutate: editLesson } = useCreateGroupsLessonMutation();

	const setParamsForm = useFormStorageStore(state => state.setParamsForm);

	const editLesson = (item: TLesson) => setParamsForm(item);

	const columns: ColumnsType<TLesson> = [
		{
			width: 50,
			ellipsis: true,
			title: "№",
			dataIndex: "index",
			key: "index",
			render: (_v, _r, index) => index + 1,
		},
		{
			ellipsis: true,
			title: "Задания",
			dataIndex: "title",
			key: "title",
			render: formatEmpty,
		},
		{
			ellipsis: true,
			title: "Сумма",
			dataIndex: "price",
			key: "price",
			render: priceFormatter,
		},
		{
			ellipsis: true,
			title: "Завершено",
			dataIndex: "is_free",
			key: "is_free",
			render: (value: boolean) => <ApproveCheck isValue={value} />,
		},
		{
			ellipsis: true,
			title: "Дата",
			dataIndex: "date",
			key: "date",
		},
		{
			fixed: "right",
			key: "action",
			align: "end",
			width: 100,
			render: (_, lesson) => (
				<Tooltip title="Перенести">
					<UiButton
						color="orange"
						type="primary"
						icon={<MdOutlineAutoDelete />}
						onClick={() => editLesson(lesson)}
						aria-label="Edit"
					/>
				</Tooltip>
			),
		},
	];

	return columns;
};
