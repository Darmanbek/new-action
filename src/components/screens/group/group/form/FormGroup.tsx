import { Form, Select } from "antd";
import { FC, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { GlobalDrawer } from "src/components/shared";
import {
	useCreateGroupsStudentMutation,
	useGetStudentsQuery,
} from "src/services";
import { TGroupStudentChange } from "src/services/index.types";
import { useFormStorageStore } from "src/store";

const FormGroup: FC = () => {
	const [form] = Form.useForm<any>();
	const { group_id } = useParams()

	const paramsForm = useFormStorageStore((state) => state.paramsForm);

	const { data: students } = useGetStudentsQuery();

	const studentsOptions = students?.data.map((student) => ({
		value: student.id,
		label: `${student.first_name} ${student.last_name}`,
	}));

	const {
		mutate: createGroupStudent,
		isLoading: createLoading,
		isError: createError,
	} = useCreateGroupsStudentMutation();

	const onFinish = (values: TGroupStudentChange) => {
		createGroupStudent({
			...values,
			group_id: `${group_id}`
		});
	};

	useEffect(() => {
		if (paramsForm) {
			form.setFieldsValue({
				...paramsForm,
			});
		}
	}, [paramsForm, form]);
	return (
		<GlobalDrawer form={form} isLoading={createLoading} isError={createError}>
			<Form
				name="Group Form"
				form={form}
				onFinish={onFinish}
				autoComplete="off"
				layout="vertical"
				initialValues={{
					phone: "",
				}}
				requiredMark={false}
			>
				<Form.Item<TGroupStudentChange>
					name="student_id"
					label="Студент"
					rules={[
						{ required: true, message: "Пожалуйста, выберите студента!" },
					]}
				>
					<Select placeholder="Выберите студента" options={studentsOptions} />
				</Form.Item>
			</Form>
		</GlobalDrawer>
	);
};

export { FormGroup };
