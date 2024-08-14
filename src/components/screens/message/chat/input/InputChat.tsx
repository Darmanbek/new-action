import { Form, FormProps } from "antd";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { UiInputChat } from "src/components/ui";
import { useCreateMessageMutation } from "src/services/index.api";
import { TMessageChange } from "src/services/index.types";

const InputChat: FC = () => {
	const { mutate: addMessage, isLoading } = useCreateMessageMutation();
	const { chat_id } = useParams();
	const [form] = Form.useForm<TMessageChange>();

	const onFinish: FormProps<TMessageChange>["onFinish"] = (values) => {
		if (!chat_id) return;
		addMessage({
			...values,
			to_user: chat_id
		}, {
			onSuccess: () => {
				form.resetFields();
			}
		});
	};
	return (
		<Form
			name={"Chat Form"}
			form={form}
			initialValues={{
				message: ""
			}}
			requiredMark={false}
			autoComplete={"off"}
			onFinish={onFinish}
		>
			<Form.Item<TMessageChange>
				name={"message"}
				noStyle={true}
				rules={[
					{ required: true }
				]}
			>
				<UiInputChat
					loading={isLoading}
				/>
			</Form.Item>
		</Form>
	);
};

export { InputChat };
