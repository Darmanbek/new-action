import { Form, Input } from "antd";
import { FC, useEffect } from "react";
import { GlobalDrawer } from "src/components/shared";
import { UiInputMask } from "src/components/ui";
import { useFormStorageStore } from "src/store";

const FormProfile: FC = () => {
	const [form] = Form.useForm<any>();

	const paramsForm = useFormStorageStore((state) => state.paramsForm);


	const onFinish = (_values: any) => {
		// editMe({
		// 	...values,
		// 	phone: values.phone.split(" ").join(""),
		// });
	};

	useEffect(() => {
		if (paramsForm)
			form.setFieldsValue({
				...paramsForm,
			});
	}, [paramsForm, form]);
	return (
		<GlobalDrawer 
		form={form} 
		isLoading={false} 
		isError={false}
		>
			<Form
				name="Me Form"
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

export { FormProfile };
