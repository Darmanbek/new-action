import { useEffect } from "react";
import { Form, Input } from "antd";
import { GlobalDrawer } from "src/components/shared";
import { UiInputMask } from "src/components/ui";
import {
	useCreateAcceptancesMutation,
	useEditAcceptancesMutation,
} from "src/services/index.api";
import { useFormStorageStore } from "src/store";
import { phoneReverseFormatter } from "src/utils";
import { TAcceptance } from "src/services/index.types";

export const FormAcceptance = () => {
	const [form] = Form.useForm<TAcceptance>();
	const paramsForm = useFormStorageStore((state) => state.paramsForm);
	const {
		mutate: createAcceptance,
		isLoading: createLoading,
		isError: createError,
	} = useCreateAcceptancesMutation();
	const {
		mutate: editAcceptance,
		isLoading: editLoading,
		isError: editError,
	} = useEditAcceptancesMutation();

	const onFinish = (values: any) => {
		if (values.phone) {
			values.phone = phoneReverseFormatter(values.phone);
		}
		if (paramsForm) {
			editAcceptance({
				...values,
				id: paramsForm.id,
			});
		} else {
			createAcceptance({
				...values,
			});
		}
	};

	useEffect(() => {
		if (paramsForm) {
			form.setFieldsValue({
				...paramsForm,
				phone: `+${paramsForm.phone}`,
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
				name="Acceptances Form"
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
					rules={[
						{
							required: true,
							message: "Пожалуйста, введите Телефон!",
						},
					]}
				>
					<UiInputMask
						placeholder="Введите телефон номер"
						mask={"+\\9\\98 99 999 99 99"}
					/>
				</Form.Item>
				<Form.Item<any>
					name="password"
					label="Пароль"
					rules={[
						{
							required: !paramsForm,
							message: "Пожалуйста, введите Пароль!",
						},
					]}
				>
					<Input.Password placeholder="Введите пароль" type="password" />
				</Form.Item>
			</Form>
		</GlobalDrawer>
	);
};
