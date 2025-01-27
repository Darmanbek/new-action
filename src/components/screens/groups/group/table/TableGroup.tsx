import { FC } from "react"
import { UiTabs } from "src/components/ui"
import { TableStudents } from "./students/TableStudents"
import { TableAssessments } from "./assessments/TableAssessments"

const TableGroup: FC = () => {
  return (
    <>
      <UiTabs
        items={[
          {
            key: "assessments",
            label: "Посещаемость",
            children: <TableAssessments />,
          },
          {
            key: "students",
            label: "Студенты",
            children: <TableStudents />,
          },
        ]}
      />
    </>
  )
}

export { TableGroup }
