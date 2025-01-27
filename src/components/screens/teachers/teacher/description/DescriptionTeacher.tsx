import { EditOutlined, UserOutlined } from "@ant-design/icons"
import { Avatar, Image, Space, Spin, Tooltip } from "antd"
import { FC } from "react"
import { useParams } from "react-router-dom"
import { UiButton, UiCard, UiDescriptions } from "src/components/ui"
import { useGetTeachersByIdQuery } from "src/services/teachers"
import { TTeacher } from "src/services/teachers/teachers.types"
import { useFormStorageStore } from "src/store"
import { useItemsTeacher } from "./useItemsTeacher"

const DescriptionTeacher: FC = () => {
	const { teacher_id } = useParams()
	const { data: teacher, isLoading, isFetching } = useGetTeachersByIdQuery(teacher_id)

	const setParamsForm = useFormStorageStore((state) => state.setParamsForm)
	const onEditTeacher = (item?: TTeacher) => {
		if (!item) return
		setParamsForm(item)
	}

	const items = useItemsTeacher(teacher?.data)

	return (
		<Spin spinning={isLoading || isFetching}>
			<UiCard
				title={"Учитель"}
				extra={
					<Tooltip title={"Изменить"}>
						<UiButton
							type={"primary"}
							icon={<EditOutlined />}
							onClick={() => onEditTeacher(teacher?.data)}
							aria-label={"Edit"}
						/>
					</Tooltip>
				}
			>
				<Space size={16} style={{ width: "100%" }} align={"start"}>
					{teacher?.data?.teacher_data?.avatar ? (
						<Avatar
							src={<Image src={teacher.data?.teacher_data?.avatar} />}
							alt={"Teacher avatar"}
							shape={"square"}
							size={"large"}
							style={{
								height: "100%",
								objectFit: "cover",
								aspectRatio: 1,
								width: 150
							}}
						/>
					) : (
						<Avatar
							icon={<UserOutlined style={{ fontSize: 72 }} />}
							shape={"square"}
							size={"large"}
							style={{
								height: "100%",
								aspectRatio: 1,
								width: 150
							}}
						/>
					)}
					<UiDescriptions layout={"vertical"} items={items} />
				</Space>
			</UiCard>
		</Spin>
	)
}

export { DescriptionTeacher }
