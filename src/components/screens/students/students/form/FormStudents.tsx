import { Form, FormProps, Input } from "antd"
import { type FC, useEffect } from "react"
import { GlobalDrawer } from "src/components/shared"
import { UiInputMask } from "src/components/ui"
import { TStudentChange, useEditStudentsMutation } from "src/services/students"
import { useFormStorageStore } from "src/store"
import { formMessage, inputPlaceholder } from "src/utils"

const FormStudents: FC = () => {
	const [form] = Form.useForm<TStudentChange>()

	const paramsForm = useFormStorageStore((state) => state.paramsForm)

	const {
		mutate: editStudent,
		isLoading: editLoading,
		isError: editError
	} = useEditStudentsMutation()

	const onFinish: FormProps<TStudentChange>["onFinish"] = (values) => {
		if (paramsForm) {
			editStudent({
				...values,
				id: paramsForm.id
			})
		}
	}

	useEffect(() => {
		if (paramsForm) {
			form.setFieldsValue({
				...paramsForm,
				phone: paramsForm?.phone ? `+${paramsForm?.phone}` : ""
			})
		}
	}, [form, paramsForm])
	return (
		<GlobalDrawer form={form} isLoading={editLoading} isError={editError}>
			<Form
				name={"Student Form"}
				form={form}
				onFinish={onFinish}
				autoComplete={"off"}
				layout={"vertical"}
				requiredMark={false}
			>
				<Form.Item<TStudentChange>
					name={"first_name"}
					label={"Имя"}
					rules={[
						{
							required: true,
							message: formMessage("Имя")
						}
					]}
				>
					<Input placeholder={inputPlaceholder} />
				</Form.Item>
				<Form.Item<TStudentChange>
					name={"last_name"}
					label={"Фамилия"}
					rules={[
						{
							required: true,
							message: formMessage("Имя")
						}
					]}
				>
					<Input placeholder={inputPlaceholder} />
				</Form.Item>
				<Form.Item<TStudentChange>
					name={"phone"}
					label={"Телефон"}
					rules={[
						{
							required: true,
							message: formMessage("Телефон")
						}
					]}
					initialValue={""}
				>
					<UiInputMask mask={"+\\9\\98 99 999 99 99"} placeholder={inputPlaceholder} />
				</Form.Item>
				<Form.Item<TStudentChange>
					name={"password"}
					label={"Пароль"}
					rules={[
						{
							required: false,
							message: formMessage("Пароль")
						},
						{
							min: 5
						}
					]}
				>
					<Input.Password placeholder={inputPlaceholder} />
				</Form.Item>
			</Form>
		</GlobalDrawer>
	)
}

export { FormStudents }
