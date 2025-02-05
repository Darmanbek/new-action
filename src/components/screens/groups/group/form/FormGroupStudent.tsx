import { Form, FormProps, Space, Spin, Typography } from "antd"
import { type FC, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalDrawer } from "src/components/shared"
import { UiSelect } from "src/components/ui"
import { useDebounce } from "src/hooks"
import { TGroupStudentChange, useCreateGroupsStudentsMutation } from "src/services/groups"
import { useGetStudentsQuery } from "src/services/students"
import { formMessage, phoneFormatter, selectPlaceholder } from "src/utils"

const FormGroupStudent: FC = () => {
	const { group_id } = useParams<{ group_id: string }>()

	const [form] = Form.useForm<TGroupStudentChange>()

	const [currentSearch, setCurrentSearch] = useState("")
	const search = useDebounce(currentSearch)

	const {
		data: students,
		isLoading: isStudentsLoading,
		isFetching: isStudentsFetching
	} = useGetStudentsQuery({
		search,
		limit: 1000
	})

	const {
		mutate: addStudent,
		isLoading: addLoading,
		isError: addError
	} = useCreateGroupsStudentsMutation()

	const onFinish: FormProps<TGroupStudentChange>["onFinish"] = (values) => {
		addStudent({
			...values,
			group_id
		})
	}

	return (
		<GlobalDrawer form={form} isLoading={addLoading} isError={addError}>
			<Form
				name={"Group Student Form"}
				form={form}
				onFinish={onFinish}
				autoComplete={"off"}
				layout={"vertical"}
				requiredMark={false}
			>
				<Form.Item<TGroupStudentChange>
					name={"student_id"}
					label={"Студент"}
					rules={[{ required: true, message: formMessage("Студент") }]}
				>
					<UiSelect
						showSearch={true}
						style={{ width: "100%" }}
						placeholder={selectPlaceholder}
						filterOption={false}
						onSearch={setCurrentSearch}
						loading={isStudentsLoading || isStudentsFetching}
						options={students?.data.map((student) => ({
							value: student.id,
							label: `${student?.first_name || ""} ${student?.last_name || ""}`,
							phone: phoneFormatter(student.phone)
						}))}
						dropdownRender={(menu) => (
							<Spin spinning={isStudentsLoading || isStudentsFetching}>{menu}</Spin>
						)}
						optionRender={(option) => (
							<Space size={2} direction={"vertical"}>
								{option.label}
								<Typography.Text style={{ color: "inherit" }} type={"secondary"}>
									{option?.data?.phone}
								</Typography.Text>
							</Space>
						)}
					/>
				</Form.Item>
			</Form>
		</GlobalDrawer>
	)
}

export { FormGroupStudent }
