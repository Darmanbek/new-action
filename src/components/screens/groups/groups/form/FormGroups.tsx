import { Form, Input } from "antd"
import dayjs from "dayjs"
import { useEffect } from "react"
import { GlobalDrawer } from "src/components/shared"
import { UiDatePicker, UiInputMonth, UiInputPrice, UiSelect } from "src/components/ui"
import {
	type TGroupChange,
	useCreateGroupsMutation,
	useEditGroupsMutation
} from "src/services/groups"
import { useGetDayQuery } from "src/services/shared/day"
import { type TTeacher, useGetTeachersQuery } from "src/services/teachers"
import { useFormStorageStore } from "src/store"
import {
	dateFormatter,
	datePlaceholder,
	dayTranslation,
	formMessage,
	inputPlaceholder,
	selectPlaceholder
} from "src/utils"

export const FormGroups = () => {
	const [form] = Form.useForm<TGroupChange>()
	const teacher_id = Form.useWatch("teacher_id", form)
	const assistant_id = Form.useWatch("assistant", form)
	const paramsForm = useFormStorageStore((state) => state.paramsForm)
	const { data: teachers } = useGetTeachersQuery({
		limit: 1000,
		per_page: 1000
	})
	const { data: days } = useGetDayQuery()
	const {
		mutate: createGroup,
		isLoading: createLoading,
		isError: createError
	} = useCreateGroupsMutation()
	const { mutate: editGroup, isLoading: editLoading, isError: editError } = useEditGroupsMutation()

	const teachersOptions = teachers?.data.map((teacher) => ({
		value: teacher.id,
		label: `${teacher.first_name} ${teacher.last_name}`
	}))
	const daysOptions = days?.data.map((day) => ({
		value: day.id,
		label: dayTranslation(day.name)
	}))

	const onFinish = (values: TGroupChange) => {
		if (values.start_date) {
			values.start_date = dateFormatter(values.start_date, "YYYY-MM-DD HH:mm:ss")
		}
		if (paramsForm) {
			editGroup({
				...values,
				id: paramsForm.id
			})
		} else {
			createGroup({
				...values
			})
		}
	}

	useEffect(() => {
		if (paramsForm) {
			form.setFieldsValue({
				...paramsForm,
				teacher_id: paramsForm?.teachers?.find((el: TTeacher) => !el.assistant)?.id || null,
				assistant: paramsForm?.teachers?.find((el: TTeacher) => el.assistant)?.id || null,
				day_id: paramsForm?.day?.id,
				start_date: paramsForm.start_date ? dayjs(paramsForm.start_date) : null
			})
		}
	}, [paramsForm, form])

	return (
		<GlobalDrawer
			form={form}
			isLoading={createLoading || editLoading}
			isError={createError || editError}
		>
			<Form
				name={"Group Form"}
				form={form}
				onFinish={onFinish}
				autoComplete={"off"}
				layout={"vertical"}
				requiredMark={false}
			>
				<Form.Item<TGroupChange>
					name={"name"}
					label={"Группа"}
					rules={[
						{
							required: true,
							message: formMessage("Группа")
						}
					]}
				>
					<Input placeholder={inputPlaceholder} />
				</Form.Item>

				<Form.Item<TGroupChange>
					name={"teacher_id"}
					label={"Учитель"}
					rules={[
						{
							required: true,
							message: formMessage("Учитель")
						}
					]}
				>
					<UiSelect
						placeholder={selectPlaceholder}
						options={teachersOptions?.filter((el) => el.value !== assistant_id)}
					/>
				</Form.Item>

				<Form.Item<TGroupChange>
					name={"assistant"}
					label={"Ассистент"}
					rules={[
						{
							required: true,
							message: formMessage("Ассистент")
						}
					]}
				>
					<UiSelect
						placeholder={selectPlaceholder}
						options={teachersOptions?.filter((el) => el.value !== teacher_id)}
					/>
				</Form.Item>

				<Form.Item<TGroupChange>
					name={"day_id"}
					label={"Дни"}
					rules={[
						{
							required: true,
							message: formMessage("Дни")
						}
					]}
				>
					<UiSelect placeholder={selectPlaceholder} options={daysOptions} />
				</Form.Item>

				<Form.Item<TGroupChange>
					name={"start_date"}
					label={"Стартовая дата"}
					rules={[
						{
							required: true,
							message: formMessage("Стартовая дата")
						}
					]}
				>
					<UiDatePicker
						showTime={{
							showHour: true,
							showMinute: true
						}}
						placeholder={datePlaceholder}
					/>
				</Form.Item>

				<Form.Item<TGroupChange>
					name={"duration"}
					label={"Длительность"}
					rules={[
						{
							required: true,
							message: formMessage("Длительность")
						}
					]}
				>
					<UiInputMonth min={0} placeholder={inputPlaceholder} />
				</Form.Item>

				<Form.Item
					name={"price"}
					label={"Цена"}
					rules={[
						{
							required: true,
							message: formMessage("Цена")
						}
					]}
				>
					<UiInputPrice addonAfter={"UZS"} placeholder={inputPlaceholder} />
				</Form.Item>

				<Form.Item<TGroupChange>
					name={"description"}
					label={"Описание"}
					rules={[
						{
							required: true,
							message: formMessage("Описание")
						}
					]}
				>
					<Input.TextArea rows={5} placeholder={inputPlaceholder} />
				</Form.Item>
			</Form>
		</GlobalDrawer>
	)
}
