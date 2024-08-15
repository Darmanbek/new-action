import type { ColumnsType } from "antd/es/table";
import { ApproveCheck } from "src/components/shared";
import { UiTag } from "src/components/ui";
import { TGroup } from "src/services/index.types";
import { formatEmpty } from "src/utils";

export const useColumnsGroups = () => {

	const columns: ColumnsType<TGroup> = [
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
			title: "Название",
			dataIndex: "name",
			key: "name",
		},
		{
			ellipsis: true,
			title: "Стартовая дата",
			dataIndex: "start_date",
			key: "start_date",
			render: formatEmpty,
		},
		{
			align: "center",
			ellipsis: true,
			title: "Уроки",
			dataIndex: "lesson_count",
			key: "lesson_count",
			render: (group_count: number) => group_count ? (
				<UiTag color={"red"}>
					{formatEmpty(group_count)}
				</UiTag>
			) : "-",
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
	];

	return columns;
};
