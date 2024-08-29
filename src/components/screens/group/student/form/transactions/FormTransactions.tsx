import { Form, FormProps, Input } from "antd";
import { useParams } from "react-router-dom";
import { GlobalDrawer } from "src/components/shared";
import { UiInputPrice, UiSelect } from "src/components/ui";
import { useCreateBalanceMutation, useGetPaymentTypesQuery } from "src/services/index.api";
import { TBalanceChange } from "src/services/index.types";
import { formMessage, inputPlaceholder, paymentTranlation, selectPlaceholder } from "src/utils";

export const FormTransactions = () => {
	const [form] = Form.useForm<TBalanceChange>();
	const { student_id, group_id } = useParams();
	const {
		mutate: createGroupStudentBalances,
		isLoading: createLoading,
		isError: createError,
	} = useCreateBalanceMutation();

	const { data: payments } = useGetPaymentTypesQuery();

	const onFinish: FormProps<TBalanceChange>["onFinish"] = (values) => {
		if (!student_id) return;
		if (!group_id) return;
		createGroupStudentBalances({
			...values,
			student_id: student_id,
			group_id: group_id,
		});
	};

	return (
		<GlobalDrawer
			form={form}
			isLoading={createLoading}
			isError={createError}
		>
			<Form
				name="Balances Form"
				form={form}
				onFinish={onFinish}
				autoComplete={"off"}
				layout={"vertical"}
				requiredMark={false}
			>
				<Form.Item<TBalanceChange>
					name={"payment_type_id"}
					label={"Способ оплаты"}
					rules={[
						{
							required: true,
							message: formMessage("Способ оплаты"),
						},
					]}
				>
					<UiSelect
						options={payments?.data.map(pay => ({
							value: pay.id,
							label: paymentTranlation(pay.name),
						}))}
						placeholder={selectPlaceholder}
					/>
				</Form.Item>
				<Form.Item<TBalanceChange>
					name={"amount"}
					label={"Цена"}
					rules={[
						{
							required: true,
							message: formMessage("Цена"),
						},
					]}
				>
					<UiInputPrice
						addonAfter="UZS"
						placeholder={inputPlaceholder}
					/>
				</Form.Item>
				<Form.Item
					name={"comment"}
					label={"Комментарий"}
					rules={[
						{
							required: true,
							message: formMessage("Комментарий"),
						},
					]}
				>
					<Input.TextArea
						rows={8}
						placeholder={inputPlaceholder}
					/>
				</Form.Item>
			</Form>
		</GlobalDrawer>
	);
};
