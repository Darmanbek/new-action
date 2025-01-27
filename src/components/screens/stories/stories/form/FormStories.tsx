import { Form, FormProps, Input } from "antd"
import { FC, useEffect } from "react"
import { GlobalDrawer } from "src/components/shared"
import {
	type TStoryChange,
	useCreateStoriesMutation,
	useEditStoriesMutation
} from "src/services/stories"
import { useFormStorageStore } from "src/store"
import { formMessage, inputPlaceholder } from "src/utils"

const FormStories: FC = () => {
	const [form] = Form.useForm<TStoryChange>()

	const paramsForm = useFormStorageStore((state) => state.paramsForm)

	const { mutate: addStory, isLoading: addLoading, isError: addError } = useCreateStoriesMutation()

	const { mutate: editStory, isLoading: editLoading, isError: editError } = useEditStoriesMutation()

	const onFinish: FormProps<TStoryChange>["onFinish"] = (values) => {
		if (paramsForm) {
			editStory({
				...values,
				id: paramsForm.id
			})
		} else {
			addStory(values)
		}
	}

	useEffect(() => {
		if (paramsForm) {
			form.setFieldsValue({
				...paramsForm
			})
		}
	}, [form, paramsForm])
	return (
		<GlobalDrawer form={form} isLoading={addLoading || editLoading} isError={addError || editError}>
			<Form
				name={"Story Form"}
				form={form}
				onFinish={onFinish}
				layout={"vertical"}
				autoComplete={"off"}
				requiredMark={false}
			>
				<Form.Item<TStoryChange>
					name={"title"}
					label={"Заголовок"}
					rules={[
						{
							required: true,
							message: formMessage("Заголовок")
						}
					]}
				>
					<Input.TextArea rows={20} placeholder={inputPlaceholder} />
				</Form.Item>
			</Form>
		</GlobalDrawer>
	)
}

export { FormStories }
