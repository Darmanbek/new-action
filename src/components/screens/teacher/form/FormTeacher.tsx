import { Form, Input } from "antd";
import { FC, useEffect } from "react";
import { GlobalDrawer } from "src/components/shared";
import { UiInputMask } from "src/components/ui";
import {
	useCreateTeachersMutation,
	useEditTeachersMutation,
} from "src/services";
import { TUser } from "src/services/index.types";
import { useFormStorageStore } from "src/store";
import { phoneReverseFormatter } from "src/utils";

const FormTeacher: FC = () => {
	const [form] = Form.useForm<any>();

	const paramsForm = useFormStorageStore((state) => state.paramsForm);

	const {
		mutate: createTeacher,
		isLoading: createLoading,
		isError: createError,
	} = useCreateTeachersMutation();
	const {
		mutate: editTeacher,
		isLoading: editLoading,
		isError: editError,
	} = useEditTeachersMutation();

	const onFinish = (values: TUser) => {
		if (values.phone) {
			values.phone = phoneReverseFormatter(values.phone);
		}
		if (paramsForm) {
			editTeacher({
				...values,
				id: paramsForm.id,
				role_id: 3
			});
		} else {
			createTeacher({
				...values,
				role_id: 3
			});
		}
	};

	useEffect(() => {
		if (paramsForm) {
			form.setFieldsValue({
				...paramsForm,
				phone: `+${paramsForm.phone}`
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
				name="Teacher Form"
				form={form}
				onFinish={onFinish}
				autoComplete="off"
				layout="vertical"
				initialValues={{
					phone: "",
				}}
				requiredMark={false}
			>
				<Form.Item<any>
					name="first_name"
					label="Имя"
					rules={[{ required: true, message: "Пожалуйста, введите Имя!" }]}
				>
					<Input placeholder="Введите имя" />
				</Form.Item>
				<Form.Item<any>
					name="last_name"
					label="Фамилия"
					rules={[{ required: true, message: "Пожалуйста, введите Имя!" }]}
				>
					<Input placeholder="Введите фамилию" />
				</Form.Item>
				<Form.Item<any>
					name="phone"
					label="Телефон"
					rules={[{ required: true, message: "Пожалуйста, введите Телефон!" }]}
				>
					<UiInputMask
						placeholder="Введите телефон номер"
						mask="+\9\98 99 999 99 99"
					/>
				</Form.Item>
				<Form.Item<any>
					name="password"
					label="Пароль"
					rules={[
						{ required: !paramsForm, message: "Пожалуйста, введите Пароль!" },
					]}
				>
					<Input.Password placeholder="Введите пароль" type="password" />
				</Form.Item>
			</Form>
		</GlobalDrawer>
	);
};

export { FormTeacher };
