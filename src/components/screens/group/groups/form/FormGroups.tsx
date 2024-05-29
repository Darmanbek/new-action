import { Form, Input, InputNumber, Select } from "antd";
import { FC, useEffect } from "react";
import { GlobalDrawer } from "src/components/shared";
import { UiDatePicker, UiInputPrice, UiSelect } from "src/components/ui";
import {
	useCreateGroupsMutation,
	useEditGroupsMutation,
	useGetTeachersQuery,
} from "src/services";
import { TGroupChange } from "src/services/index.types";
import { useFormStorageStore } from "src/store";
import { dateFormatter } from "src/utils";

const FormGroups: FC = () => {
	const [form] = Form.useForm<any>();

	const paramsForm = useFormStorageStore((state) => state.paramsForm);

	const { data: teachers } = useGetTeachersQuery();

	const teachersOptions = teachers?.data.map((teacher) => ({
		value: teacher.id,
		label: `${teacher.first_name} ${teacher.last_name}`,
	}));

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
				teacher_id: paramsForm.teachers.find((el: any) => !el.assistant).id || null,
				assistant: paramsForm.teachers.find((el: any) => el.assistant).id || null
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
					label="Название"
					rules={[{ required: true, message: "Пожалуйста, введите название!" }]}
				>
					<Input placeholder="Введите имя" />
				</Form.Item>
				<Form.Item<TGroupChange>
					name="teacher_id"
					label="Учитель"
					rules={[{ required: true, message: "Пожалуйста, выберите учителя!" }]}
				>
					<UiSelect placeholder="Выберите учителя" options={teachersOptions} />
				</Form.Item>
				<Form.Item<TGroupChange>
					name="assistant"
					label="Ассистент"
					rules={[
						{ required: true, message: "Пожалуйста, выберите ассистента!" },
					]}
				>
					<UiSelect placeholder="Выберите ассистента" options={teachersOptions} />
				</Form.Item>
				{!paramsForm && 
					<Form.Item<TGroupChange>
						name="start_date"
						label="Дата"
						rules={[{ required: true, message: "Пожалуйста, выберите дату!" }]}
					>
						<UiDatePicker placeholder="Выберите дату" />
					</Form.Item>
				}
				<Form.Item<TGroupChange>
					name="price"
					label="Сумма"
					rules={[{ required: true, message: "Пожалуйста, введите сумму!" }]}
				>
					<UiInputPrice placeholder="Введите сумму" />
				</Form.Item>
				<Form.Item<TGroupChange>
					name="lesson_count"
					label="Задания"
					rules={[{ required: true, message: "Пожалуйста, введите задания!" }]}
				>
					<InputNumber style={{width: "100%"}} placeholder="Введите задания" />
				</Form.Item>
				<Form.Item<TGroupChange>
					name="description"
					label="Описание"
					rules={[{ required: true, message: "Пожалуйста, введите описание!" }]}
				>
					<Input.TextArea placeholder="Введите описание" rows={8} />
				</Form.Item>
			</Form>
		</GlobalDrawer>
	);
};

export { FormGroups };
