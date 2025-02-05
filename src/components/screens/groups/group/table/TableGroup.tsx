import { PlusOutlined } from "@ant-design/icons"
import { FC } from "react"
import { UiTabs, UiTooltipButton } from "src/components/ui"
import { useFormStorageStore } from "src/store"
import { TableAssessments } from "./assessments/TableAssessments"
import { TableStudents } from "./students/TableStudents"

const TableGroup: FC = () => {
	const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer)

	return (
		<>
			<UiTabs
				tabBarExtraContent={
					<UiTooltipButton
						type={"primary"}
						title={"Добавить студента"}
						showTitle={true}
						onClick={toggleDrawer}
						style={{ marginBottom: 16 }}
						icon={<PlusOutlined />}
					>
						Добавить
					</UiTooltipButton>
				}
				items={[
					{
						key: "assessments",
						label: "Посещаемость",
						children: <TableAssessments />
					},
					{
						key: "students",
						label: "Студенты",
						children: <TableStudents />
					}
				]}
			/>
		</>
	)
}

export { TableGroup }
