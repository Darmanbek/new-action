import { Form, Select } from "antd";
import dayjs from 'dayjs';
import { FC, useEffect } from "react";
import { GlobalDrawer } from "src/components/shared";
import { UiDatePicker } from 'src/components/ui';
import {
	useCreateGroupsLessonMutation,
} from "src/services";
import { TGroupLessonChange } from "src/services/index.types";
import { useFormStorageStore } from "src/store";
import { dateFormatter } from 'src/utils';

const FormGroupLessons: FC = () => {
	const [form] = Form.useForm<any>();

	const paramsForm = useFormStorageStore((state) => state.paramsForm);


	const {
		mutate: createGroupLesson,
		isLoading: createLoading,
		isError: createError,
	} = useCreateGroupsLessonMutation();

	const onFinish = (values: TGroupLessonChange) => {
		if (values["date"]) {
			values["date"] = dateFormatter(values.date);
		}
		if (paramsForm) {
			createGroupLesson({
				...values,
				id: paramsForm.id
			});
		}
	};

	useEffect(() => {
		if (paramsForm) {
			form.setFieldsValue({
				...paramsForm,
				date: paramsForm.date ? dayjs(paramsForm.date) : null
			});
		}
	}, [paramsForm, form]);
	return (
		<GlobalDrawer form={form} isLoading={createLoading} isError={createError}>
			<Form
				name="Group Form"
				form={form}
				onFinish={onFinish}
				autoComplete="off"
				layout="vertical"
				requiredMark={false}
			>
				<Form.Item<TGroupLessonChange>
					name="date"
					label="Дата"
					rules={[
						{ required: true, message: "Пожалуйста, выберите дату!" },
					]}
				>
					<UiDatePicker placeholder="Выберите дату"/>
				</Form.Item>
			</Form>
		</GlobalDrawer>
	);
};

export { FormGroupLessons };
