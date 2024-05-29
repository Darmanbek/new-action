import { Form, Input } from "antd";
import { FC, useEffect } from "react";
import { GlobalDrawer } from "src/components/shared";
import { UiInputMask } from "src/components/ui";
import { useCreateStudentsMutation, useEditStudentsMutation } from 'src/services';
import { TUser } from 'src/services/index.types';
import { useFormStorageStore } from "src/store";
import { phoneReverseFormatter } from 'src/utils';

const FormStudent: FC = () => {
	const [form] = Form.useForm<any>();

	const paramsForm = useFormStorageStore((state) => state.paramsForm);

	const {
		mutate: createStudent,
		isLoading: createLoading,
		isError: createError,
	} = useCreateStudentsMutation();
	const {
		mutate: editStudent,
		isLoading: editLoading,
		isError: editError,
	} = useEditStudentsMutation();

	const onFinish = (values: TUser) => {
		if (values.phone) {
			values.phone = phoneReverseFormatter(values.phone);
		}
		if (paramsForm) {
			editStudent({
				...values,
				id: paramsForm.id,
				role_id: 4
			});
		} else {
			createStudent({
				...values,
				role_id: 4
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
				name="Student Form"
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
					rules={[{ required: true, message: "Пожалуйста, введите имя!" }]}
				>
					<Input placeholder="Введите имя" />
				</Form.Item>
				<Form.Item<any>
					name="last_name"
					label="Фамилия"
					rules={[{ required: true, message: "Пожалуйста, введите фамилию!" }]}
				>
					<Input placeholder="Введите фамилию" />
				</Form.Item>
				<Form.Item<any>
					name="phone"
					label="Телефон"
					rules={[{ required: true, message: "Пожалуйста, введите телефон!" }]}
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
						{ required: !paramsForm, message: "Пожалуйста, введите пароль!" },
					]}
				>
					<Input.Password placeholder="Введите пароль" type="password" />
				</Form.Item>
			</Form>
		</GlobalDrawer>
	);
};

export { FormStudent };
