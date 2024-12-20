import { FormHoliday } from "./form/FormHoliday";
import { UiTabs } from "src/components/ui";
import { CalendarHoliday } from "./calendar/CalendarHoliday";
import { TableHoliday } from "./table/TableHoliday";

export default function Holiday() {
	return (
		<UiTabs
			items={[
				{
					key: "/calendar",
					label: "Календарь",
					children: <CalendarHoliday />,
				},
				{
					key: "/table",
					label: "Таблица",
					children: (
						<>
							<FormHoliday />
							<TableHoliday />
						</>
					),
				},
			]}
		/>
	);
}
