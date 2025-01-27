import { Form, Input } from "antd"
import { useEffect } from "react"
import { GlobalDrawer } from "src/components/shared"
import { UiInputMask } from "src/components/ui"
import {
	type TAdminChange,
	useCreateAdminsMutation,
	useEditAdminsMutation
} from "src/services/admins"
import { useFormStorageStore } from "src/store"
import { formMessage, inputPlaceholder, phoneReverseFormatter } from "src/utils"

export const FormAdmins = () => {
	const [form] = Form.useForm<TAdminChange>()
	const paramsForm = useFormStorageStore((state) => state.paramsForm)
	const {
		mutate: createAdmin,
		isLoading: createLoading,
		isError: createError
	} = useCreateAdminsMutation()
	const { mutate: editAdmin, isLoading: editLoading, isError: editError } = useEditAdminsMutation()

	const onFinish = (values: TAdminChange) => {
		if (values.phone) {
			values.phone = phoneReverseFormatter(values.phone)
		}
		if (paramsForm) {
			editAdmin({
				...values,
				id: paramsForm.id
			})
		} else {
			createAdmin({
				...values
			})
		}
	}

	useEffect(() => {
		if (paramsForm) {
			form.setFieldsValue({
				...paramsForm,
				phone: `+${paramsForm.phone}`
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
				name={"Admin Form"}
				form={form}
				onFinish={onFinish}
				autoComplete={"off"}
				layout={"vertical"}
				initialValues={{
					phone: ""
				}}
				requiredMark={false}
			>
				<Form.Item<TAdminChange>
					name={"first_name"}
					label={"Имя"}
					rules={[{ required: true, message: formMessage("Имя") }]}
				>
					<Input placeholder={inputPlaceholder} />
				</Form.Item>

				<Form.Item<TAdminChange>
					name={"last_name"}
					label={"Фамилия"}
					rules={[
						{
							required: true,
							message: formMessage("Фамилия")
						}
					]}
				>
					<Input placeholder={inputPlaceholder} />
				</Form.Item>

				<Form.Item<TAdminChange>
					name={"phone"}
					label={"Телефон"}
					rules={[{ required: true, message: formMessage("Телефон") }]}
				>
					<UiInputMask placeholder={inputPlaceholder} mask={"+\\9\\98 99 999 99 99"} />
				</Form.Item>

				<Form.Item<TAdminChange>
					name={"password"}
					label={"Пароль"}
					rules={[
						{
							required: !paramsForm,
							message: formMessage("Пароль")
						}
					]}
				>
					<Input.Password placeholder={inputPlaceholder} type={"password"} />
				</Form.Item>
			</Form>
		</GlobalDrawer>
	)
}
