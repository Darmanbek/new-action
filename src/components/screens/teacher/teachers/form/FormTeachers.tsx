import dayjs from "dayjs";
import { useEffect } from "react";
import { Form, Input, Radio, Upload, Avatar, Flex, Row, Col } from "antd";
import { BsGenderFemale, BsGenderMale, BsPersonBoundingBox } from "react-icons/bs";
import { GlobalDrawer } from "src/components/shared";
import { UiInputMask, UiDatePicker } from "src/components/ui";
import {
	useCreateTeachersMutation,
	useEditTeachersMutation,
} from "src/services/index.api";
import { TTeacherChange } from "src/services/index.types";
import { useFormStorageStore } from "src/store";
import { dateFormatter, datePlaceholder, formMessage, inputPlaceholder, phoneReverseFormatter } from "src/utils";

export const FormTeachers = () => {
	const [form] = Form.useForm<TTeacherChange>();
	const avatar = Form.useWatch("avatar", form);
	const paramsForm = useFormStorageStore((state) => state.paramsForm);
	const {
		mutate: addTeacher,
		isLoading: addLoading,
		isError: addError,
	} = useCreateTeachersMutation();
	const {
		mutate: editTeacher,
		isLoading: editLoading,
		isError: editError,
	} = useEditTeachersMutation();

	const normFile = (e: any) => {
		if (Array.isArray(e)) return e;
		return e?.fileList;
	};

	const onFinish = (values: TTeacherChange) => {
		const formData = new FormData();

		if (values.phone) {
			formData.append("phone", phoneReverseFormatter(values.phone));
		}
		if (values.avatar && Array.isArray(values.avatar) && values.avatar.length) {
			const [avatar] = values.avatar;
			formData.append("avatar", avatar.originFileObj as File);
		}
		formData.append("first_name", values.first_name);
		formData.append("last_name", values.last_name);
		formData.append("is_male", Number(values.is_male).toString());
		if (values.password) {
			formData.append("password", values.password);
		}
		if (values.birthday) {
			formData.append("birthday", dateFormatter(values.birthday));
		}
		if (paramsForm) {
			formData.append("_method", "PATCH");
			editTeacher({
				formData,
				id: paramsForm.id,
			});
		} else {
			addTeacher(formData);
		}
	};

	useEffect(() => {
		if (paramsForm) {
			form.setFieldsValue({
				...paramsForm,
				phone: `+${paramsForm.phone}`,
				is_male: paramsForm.teacher_data?.is_male,
				birthday: paramsForm.teacher_data?.birthday ? dayjs(paramsForm.teacher_data.birthday) : null,
			});
		}
	}, [paramsForm, form]);

	return (
		<GlobalDrawer
			form={form}
			isLoading={addLoading || editLoading}
			isError={addError || editError}
		>
			<Form
				name="Teacher Form"
				form={form}
				onFinish={onFinish}
				autoComplete="off"
				layout="vertical"
				initialValues={{
					phone: "",
				}}
				requiredMark={false}
			>

				<Form.Item<TTeacherChange>
					name="first_name"
					label="Имя"
					rules={[{ required: true, message: formMessage("Имя") }]}
				>
					<Input placeholder={inputPlaceholder} />
				</Form.Item>

				<Form.Item<TTeacherChange>
					name="last_name"
					label="Фамилия"
					rules={[
						{
							required: true,
							message: formMessage("Фамилия"),
						},
					]}
				>
					<Input placeholder={inputPlaceholder} />
				</Form.Item>

				<Form.Item<TTeacherChange>
					name="phone"
					label="Телефон"
					rules={[
						{
							required: true,
							message: formMessage("Телефон"),
						},
					]}
				>
					<UiInputMask
						placeholder={inputPlaceholder}
						mask={"+\\9\\98 99 999 99 99"}
					/>
				</Form.Item>

				<Form.Item<TTeacherChange>
					name="birthday"
					label="Дата рождения"
					rules={[
						{
							required: true,
							message: formMessage("Дата рождения"),
						},
					]}
				>
					<UiDatePicker placeholder={datePlaceholder} />
				</Form.Item>

				<Row gutter={8}>
					<Col span={12}>
						<Form.Item<TTeacherChange>
							name="avatar"
							label="Фото"
							valuePropName="fileList"
							getValueFromEvent={normFile}
						>
							<Upload
								beforeUpload={() => false}
								maxCount={1}
								listType="picture-card"
								accept=".png, .jpg, .jpeg"
								style={{
									display: "flex",
									justifyContent: "center",
								}}
							>
								{/*<Button icon={<UploadOutlined />}>Нажмите, чтобы загрузить</Button>*/}
								{avatar && Array.isArray(avatar) && avatar.length ? null : (
									<button style={{ border: 0, background: "none", cursor: "pointer" }} type="button">
										<BsPersonBoundingBox style={{ fontSize: 32 }} />
										<div style={{ marginTop: 8 }}>Загрузить</div>
									</button>
								)}
							</Upload>
						</Form.Item>


					</Col>
					<Col span={12}>
						<Form.Item<TTeacherChange>
							name={"is_male"}
							label={"Пол"}
							rules={[
								{ required: true, message: formMessage("Пол") },
							]}
						>
							<Radio.Group
								optionType={"button"}
								buttonStyle={"solid"}
							>
								<Row gutter={8} style={{ rowGap: 8 }}>
									<Col span={24}>
										<Radio value={true}>
											<Flex gap={8} align={"center"}>
												<Avatar
													style={{ background: "transparent", color: "inherit" }}
													icon={<BsGenderMale />}
													size={"default"}
												/>
												<span>Мужчина</span>
											</Flex>
										</Radio>
									</Col>
									<Col span={24}>
										<Radio value={false}>
											<Flex gap={8} align={"center"}>
												<Avatar
													style={{ background: "transparent", color: "inherit" }}
													icon={<BsGenderFemale />}
													size={"default"}
												/>
												<span>Женщина</span>
											</Flex>
										</Radio>
									</Col>
								</Row>
							</Radio.Group>
						</Form.Item>
					</Col>
				</Row>

				<Form.Item<TTeacherChange>
					name="password"
					label="Пароль"
					rules={[
						{
							required: !paramsForm,
							message: formMessage("Пароль"),
						},
					]}
				>
					<Input.Password placeholder={inputPlaceholder} />
				</Form.Item>
			</Form>
		</GlobalDrawer>
	);
};
