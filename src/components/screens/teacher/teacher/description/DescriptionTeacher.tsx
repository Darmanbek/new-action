import { EditOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Image, Row, Spin, Tooltip } from "antd";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { TTeacher } from "src/services/teachers/teachers.types";
import { useFormStorageStore } from "src/store";
import { useItemsTeacher } from "./useItemsTeacher";
import { UiButton, UiCard, UiDescriptions } from "src/components/ui";
import { useGetTeachersByIdQuery } from "src/services/index.api";

const DescriptionTeacher: FC = () => {
	const { teacher_id } = useParams();
	const {
		data: teacher,
		isLoading,
		isFetching,
	} = useGetTeachersByIdQuery(teacher_id);

	const setParamsForm = useFormStorageStore((state) => state.setParamsForm);
	const onEditTeacher = (item?: TTeacher) => {
		if (!item) return;
		setParamsForm(item);
	};

	const items = useItemsTeacher(teacher?.data);

	return (
		<Spin spinning={isLoading || isFetching}>
			<UiCard
				title={"Учитель"}
				extra={
					<Tooltip title="Изменить">
						<UiButton
							type={"primary"}
							icon={<EditOutlined />}
							onClick={() => onEditTeacher(teacher?.data)}
							aria-label={"Edit"}
						/>
					</Tooltip>
				}
			>
				<Row gutter={16}>
					<Col span={2}>
						{teacher?.data?.teacher_data?.avatar ? (
							<Avatar
								src={<Image src={teacher.data?.teacher_data?.avatar} />}
								alt="Teacher avatar"
								shape={"square"}
								size={"large"}
								style={{
									height: "100%",
									width: "100%",
									objectFit: "cover"
								}}
							/>
						) : (
							<Avatar
								icon={<UserOutlined style={{ fontSize: 72 }} />}
								shape={"square"}
								size={"large"}
								style={{
									height: "100%",
									width: "100%"
								}}
							/>
						)
						}
					</Col>
					<Col span={20}>
						<UiDescriptions
							layout={"vertical"}
							items={items}
						/>
					</Col>
				</Row>
			</UiCard>
		</Spin>
	);
};

export { DescriptionTeacher };
