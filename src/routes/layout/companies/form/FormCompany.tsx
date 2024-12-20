import { useEffect } from "react";
import { Form, Input } from "antd";
import { GlobalDrawer } from "src/components/shared";
import { UiSelect } from "src/components/ui";
import {
	useGetAdminsQuery,
	useCreateCompaniesMutation,
	useEditCompaniesMutation,
} from "src/services/index.api";
import { TCompanyChange } from "src/services/index.types";
import { useFormStorageStore } from "src/store";
import { formMessage, inputPlaceholder, selectPlaceholder } from "src/utils";

export const FormCompany = () => {
	const [form] = Form.useForm<TCompanyChange>();
	const paramsForm = useFormStorageStore((state) => state.paramsForm);
	const { data: admins } = useGetAdminsQuery();
	const {
		mutate: createCompany,
		isLoading: createLoading,
		isError: createError,
	} = useCreateCompaniesMutation();
	const {
		mutate: editCompany,
		isLoading: editLoading,
		isError: editError,
	} = useEditCompaniesMutation();

	const adminsOptions = admins?.data.map((admin) => ({
		value: admin.id,
		label: `${admin.first_name} ${admin.last_name}`,
	}));

	const onFinish = (values: TCompanyChange) => {
		if (paramsForm) {
			editCompany({
				...values,
				id: paramsForm.id,
			});
		} else {
			createCompany({
				...values,
			});
		}
	};

	useEffect(() => {
		if (paramsForm) {
			const admin = admins?.data?.find(el => el?.id === paramsForm?.admin?.id);
			form.setFieldsValue({
				...paramsForm,
				admin_id: admin?.id || null,
			});
		}
	}, [paramsForm, form, admins]);

	return (
		<GlobalDrawer
			form={form}
			isLoading={createLoading || editLoading}
			isError={createError || editError}
		>
			<Form
				name="Companies Form"
				form={form}
				onFinish={onFinish}
				autoComplete="off"
				layout="vertical"
				initialValues={{
					phone: "",
				}}
				requiredMark={false}
			>
				<Form.Item<TCompanyChange>
					name="name"
					label="Название"
					rules={[
						{
							required: true,
							message: formMessage("Название"),
						},
					]}
				>
					<Input placeholder={inputPlaceholder} />
				</Form.Item>

				<Form.Item<TCompanyChange>
					name="admin_id"
					label="Админ"
					rules={[
						{
							required: true,
							message: formMessage("Админ"),
						},
					]}
				>
					<UiSelect
						placeholder={selectPlaceholder}
						options={adminsOptions}
					/>
				</Form.Item>
			</Form>
		</GlobalDrawer>
	);
};
