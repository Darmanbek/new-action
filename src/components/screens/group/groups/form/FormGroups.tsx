import { useEffect } from "react";
import { Form, Input } from "antd";
import { GlobalDrawer } from "src/components/shared";
import { UiDatePicker, UiInputMonth, UiInputPrice, UiSelect } from "src/components/ui";
import {
	useCreateGroupsMutation,
	useEditGroupsMutation,
	useGetTeachersQuery,
} from "src/services/index.api";
import { TGroupChange, TTeacher } from "src/services/index.types";
import { useFormStorageStore } from "src/store";
import { dateFormatter, formMessage, inputPlaceholder, selectPlaceholder, datePlaceholder } from "src/utils";

export const FormGroups = () => {
	const [form] = Form.useForm<TGroupChange>();
	const paramsForm = useFormStorageStore((state) => state.paramsForm);
	const { data: teachers } = useGetTeachersQuery({});
	const {
		mutate: createGroup,
		isLoading: createLoading,
		isError: createError,
	} = useCreateGroupsMutation();
	const {
		mutate: editGroup,
		isLoading: editLoading,
		isError: editError,
	} = useEditGroupsMutation();

	const teachersOptions = teachers?.data.map((teacher) => ({
		value: teacher.id,
		label: `${teacher.first_name} ${teacher.last_name}`,
	}));

	const onFinish = (values: TGroupChange) => {
		if (values.start_date) {
			values.start_date = dateFormatter(values.start_date);
		}
		if (paramsForm) {
			editGroup({
				...values,
				id: paramsForm.id,
			});
		} else {
			createGroup({
				...values,
			});
		}
	};

	useEffect(() => {
		if (paramsForm) {
			form.setFieldsValue({
				...paramsForm,
				teacher_id:
					paramsForm.teachers.find((el: TTeacher) => !el.assistant).id ||
					null,
				assistant:
					paramsForm.teachers.find((el: TTeacher) => el.assistant).id ||
					null,
			});
		}
	}, [paramsForm, form]);

	return (
		<GlobalDrawer
			form={form}
			isLoading={createLoading || editLoading}
			isError={createError || editError}
		>
			<Form
				name="Group Form"
				form={form}
				onFinish={onFinish}
				autoComplete="off"
				layout="vertical"
				requiredMark={false}
			>
				<Form.Item<TGroupChange>
					name="name"
					label="Группа"
					rules={[
						{
							required: true,
							message: formMessage("Группа"),
						},
					]}
				>
					<Input placeholder={inputPlaceholder} />
				</Form.Item>

				<Form.Item<TGroupChange>
					name="teacher_id"
					label="Учитель"
					rules={[
						{
							required: true,
							message: formMessage("Учитель"),
						},
					]}
				>
					<UiSelect
						placeholder={selectPlaceholder}
						options={teachersOptions}
					/>
				</Form.Item>

				<Form.Item<TGroupChange>
					name="assistant"
					label="Ассистент"
					rules={[
						{
							required: true,
							message: formMessage("Ассистент"),
						},
					]}
				>
					<UiSelect
						placeholder={selectPlaceholder}
						options={teachersOptions}
					/>
				</Form.Item>

				{!paramsForm && (
					<Form.Item<TGroupChange>
						name="start_date"
						label="Старт"
						rules={[
							{
								required: true,
								message: formMessage("Дата"),
							},
						]}
					>
						<UiDatePicker placeholder={datePlaceholder} />
					</Form.Item>
				)}

				<Form.Item
					name="price"
					label="Цена"
					rules={[
						{
							required: true,
							message: formMessage("Цена"),
						},
					]}
				>
					<UiInputPrice
						addonAfter={"uzs"}
						placeholder={inputPlaceholder}
					/>
				</Form.Item>

				<Form.Item<TGroupChange>
					name={"duration"}
					label={"Длительность"}
					rules={[
						{
							required: true,
							message: formMessage("Длительность"),
						},
					]}
				>
					<UiInputMonth
						min={0}
						placeholder={inputPlaceholder}
					/>
				</Form.Item>

				<Form.Item<TGroupChange>
					name="description"
					label="Описание"
					rules={[
						{
							required: true,
							message: formMessage("Описание"),
						},
					]}
				>
					<Input.TextArea rows={5} placeholder={inputPlaceholder} />
				</Form.Item>
			</Form>
		</GlobalDrawer>
	);
};
