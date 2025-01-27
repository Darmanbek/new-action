import { FC } from "react"
import { FormHoliday } from "./form/FormHoliday"
import { UiTabs } from "src/components/ui"
import { CalendarHoliday } from "./calendar/CalendarHoliday"
import { TableHoliday } from "./table/TableHoliday"

const Holiday: FC = () => {
	return (
		<UiTabs
			items={[
				{
					key: "/calendar",
					label: "Календарь",
					children: <CalendarHoliday />,
				},
				{
					key: "/calendar-table",
					label: "Таблица",
					children: (
						<>
							<FormHoliday />
							<TableHoliday />
						</>
					)
					,
				},
			]}
		/>
	)
}

export default Holiday
