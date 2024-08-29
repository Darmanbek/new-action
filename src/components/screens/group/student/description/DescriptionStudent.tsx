import Icon, { ArrowLeftOutlined } from "@ant-design/icons";
import { Divider, Space, Spin } from "antd";
import { FC } from "react";
import { IoSnow } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { UiCard, UiDescriptions, UiTag, UiTooltipButton } from "src/components/ui";
import { useGetGroupsByIdStudentsQuery } from "src/services/index.api";

import { useItemsStudent } from "./useItemsStudent";

const DescriptionStudent: FC = () => {
	const navigate = useNavigate();
	const { group_id, student_id } = useParams();
	const { data: students, isLoading, isFetching } = useGetGroupsByIdStudentsQuery(group_id);

	const student = students?.data.find(el => el.id === student_id);

	const items = useItemsStudent(student);

	return (
		<Spin spinning={isLoading || isFetching}>
			<UiCard
				style={{ height: "100%" }}
				title={student ? (
						<Space split={<Divider type={"vertical"} />}>
							{`${student?.first_name} ${student?.last_name}`}
							{student?.frozen_status?.is_frozen && (
								<UiTag icon={<Icon><IoSnow /></Icon>} color={"cyan"}>
									Заморожен
								</UiTag>
							)}
						</Space>
					)
					: "Студент"}
				extra={
					<UiTooltipButton
						key="Back_Button"
						title="Назад"
						type="primary"
						icon={<ArrowLeftOutlined />}
						onClick={() => navigate(-1)}
					>
						Назад
					</UiTooltipButton>
				}
			>
				<UiDescriptions
					items={items}
					layout={"vertical"}
					column={2}
				/>
			</UiCard>
		</Spin>
	);
};

export { DescriptionStudent };
