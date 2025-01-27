import { Form, FormProps, Input } from "antd"
import { FC, useEffect } from "react"
import { GlobalDrawer } from "src/components/shared"
import { type TFinanceDebtorsChange, useCreateDebtorsMutation } from "src/services/finances/debtors"
import { useFormStorageStore } from "src/store"
import { formMessage, inputPlaceholder } from "src/utils"

const FormFinanceDebtors: FC = () => {
	const [form] = Form.useForm<TFinanceDebtorsChange>()

	const paramsForm = useFormStorageStore((state) => state.paramsForm)

	const { mutate: addComment, isLoading, isError } = useCreateDebtorsMutation()

	const onFinish: FormProps<TFinanceDebtorsChange>["onFinish"] = (values) => {
		if (paramsForm) {
			addComment({
				...values,
				student_id: paramsForm?.student?.id,
				balance_id: paramsForm.id
			})
		}
	}

	useEffect(() => {
		if (paramsForm) {
			form.setFieldsValue({
				...paramsForm,
				comment: paramsForm?.comment_debtor?.comment || ""
			})
		}
	}, [form, paramsForm])
	return (
		<GlobalDrawer form={form} isLoading={isLoading} isError={isError}>
			<Form
				form={form}
				onFinish={onFinish}
				autoComplete={"off"}
				layout={"vertical"}
				requiredMark={false}
			>
				<Form.Item<TFinanceDebtorsChange>
					name={"comment"}
					label={"Комментарий"}
					rules={[{ required: true, message: formMessage("Комментарий") }]}
				>
					<Input.TextArea rows={8} placeholder={inputPlaceholder} />
				</Form.Item>
			</Form>
		</GlobalDrawer>
	)
}

export { FormFinanceDebtors }
