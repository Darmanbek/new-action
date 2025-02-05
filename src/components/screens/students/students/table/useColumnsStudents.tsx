import { EditOutlined } from "@ant-design/icons"
import { Divider, Space } from "antd"
import type { ColumnsType } from "antd/es/table"
import { UiTooltipButton } from "src/components/ui"
import { TStudent } from "src/services/shared"
import { useFormStorageStore } from "src/store"
import { phoneFormatter } from "src/utils"

export const useColumnsStudents = () => {
	const editStudent = useFormStorageStore((state) => state.setParamsForm)

	const columns: ColumnsType<TStudent> = [
		{
			ellipsis: true,
			title: "Имя Фамилия",
			key: "name",
			render: (_v, student) => `${student?.first_name} ${student?.last_name}`
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
			title: "Группы",
			dataIndex: "group",
			key: "group",
			render: (group: TStudent["group"]) => (
				<Space split={<Divider />}>{group.map((el) => el.name)}</Space>
			)
		},
		{
			fixed: "right",
			align: "center",
			width: 50,
			title: "Действия",
			key: "action",
			render: (_v, student) => (
				<UiTooltipButton
					type={"primary"}
					shape={"circle"}
					color={"orange"}
					onClick={() => editStudent(student)}
					icon={<EditOutlined />}
					aria-label={"Edit"}
					showTitle={true}
					title={"Изменить"}
				/>
			)
		}
	]

	return columns
}
