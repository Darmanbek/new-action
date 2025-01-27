import { Calendar, Flex, Form, type FormProps, Select } from "antd"
import capitalize from "antd/es/_util/capitalize"
import type { FC } from "react"
import { GlobalDrawer } from "src/components/shared"
import { type THolidayChange, useCreateHolidayMutation } from "src/services/holiday"
import { dateFormatter, formMessage } from "src/utils"

const FormHoliday: FC = () => {
	const [form] = Form.useForm<THolidayChange>()

	const {
		mutate: addHoliday,
		isLoading: addLoading,
		isError: addError
	} = useCreateHolidayMutation()

	const onFinish: FormProps<THolidayChange>["onFinish"] = (values) => {
		if (values.date) {
			values.date = dateFormatter(values.date)
		}
		addHoliday(values)
	}

	return (
		<GlobalDrawer form={form} isLoading={addLoading} isError={addError}>
			<Form
				form={form}
				name={"Form Holiday"}
				layout={"vertical"}
				requiredMark={false}
				autoComplete={"off"}
				onFinish={onFinish}
			>
				<Form.Item
					name={"date"}
					label={"Дата"}
					rules={[{ required: true, message: formMessage("Дата") }]}
				>
					<Calendar
						fullscreen={false}
						headerRender={({ value, onChange }) => {
							const start = 0
							const end = 12
							const monthOptions = []

							let current = value.clone()
							const localeData = value.localeData()
							const months = []
							for (let i = 0; i < 12; i++) {
								current = current.month(i)
								months.push(localeData.months(current))
							}

							for (let i = start; i < end; i++) {
								monthOptions.push(
									<Select.Option key={i} value={i} className={"month-item"}>
										{capitalize(months[i].toString())}
									</Select.Option>
								)
							}

							const year = value.year()
							const month = value.month()
							const options = []
							for (let i = year - 10; i < year + 10; i += 1) {
								options.push(
									<Select.Option key={i} value={i} className={"year-item"}>
										{i}
									</Select.Option>
								)
							}
							return (
								<Flex style={{ padding: 16 }} gap={8} justify={"end"}>
									<Select
										size={"middle"}
										popupMatchSelectWidth={false}
										className={"my-year-select"}
										value={year}
										onChange={(newYear) => {
											const now = value.clone().year(newYear)
											onChange(now)
										}}
									>
										{options}
									</Select>
									<Select
										size={"middle"}
										popupMatchSelectWidth={false}
										value={month}
										onChange={(newMonth) => {
											const now = value.clone().month(newMonth)
											onChange(now)
										}}
									>
										{monthOptions}
									</Select>
								</Flex>
							)
						}}
					/>
				</Form.Item>
			</Form>
		</GlobalDrawer>
	)
}

export { FormHoliday }
