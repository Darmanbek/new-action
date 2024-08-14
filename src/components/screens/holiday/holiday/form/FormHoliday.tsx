import { Form, FormProps } from "antd";
import { GlobalDrawer } from "src/components/shared";
import { UiDatePicker } from "src/components/ui";
import { useEditHolidayMutation } from "src/services/index.api";
import { THolidayChange } from "src/services/index.types";
import { useFormStorageStore } from "src/store";
import { datePlaceholder, formMessage } from "src/utils";

export const FormHoliday = () => {
	const [form] = Form.useForm<THolidayChange>();

	const paramsForm = useFormStorageStore(
		state => state.paramsForm
	);

	const {
		mutate: editHoliday,
		isLoading: editLoading,
		isError: editError,
	} = useEditHolidayMutation();

	const onFinish: FormProps<THolidayChange>["onFinish"] = (values) => {
		if (paramsForm) {
			editHoliday({
				...values
			});
		}
	};

	return (
		<GlobalDrawer form={form} isLoading={editLoading} isError={editError}>
			<Form
				name="Holiday Form"
				form={form}
				onFinish={onFinish}
				autoComplete="off"
				layout="vertical"
				initialValues={{
					phone: "",
				}}
				requiredMark={false}
			>
				<Form.Item<THolidayChange>
					name={"date"}
					label={"Выходные"}
					rules={[
						{
							required: true,
							message: formMessage("Выходные"),
						},
					]}
				>
					<UiDatePicker placeholder={datePlaceholder} />
				</Form.Item>
				{/*<Form.Item<THoliday>*/}
				{/*	name="any"*/}
				{/*	label="Праздничный день"*/}
				{/*	rules={[*/}
				{/*		{*/}
				{/*			required: true,*/}
				{/*			message: "Пожалуйста, укажите выходные!",*/}
				{/*		},*/}
				{/*	]}*/}
				{/*>*/}
				{/*	<Input placeholder="Введите выходные" />*/}
				{/*</Form.Item>*/}
			</Form>
		</GlobalDrawer>
	);
};
