import Icon, { ArrowLeftOutlined } from "@ant-design/icons";
import { Divider, Rate, Space, Spin } from "antd";
import { FC } from "react";
import { IoSnow } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { UiCard, UiDescriptions, UiTag, UiTooltipButton } from "src/components/ui";
import { useGetDashboardCompaniesGroupsByIdQuery } from "src/services/index.api";

import { useItemsStudent } from "./useItemsStudent";

const DescriptionStudent: FC = () => {
	const { group_id, student_id } = useParams();
	const navigate = useNavigate();

	const {
		data: group,
		isLoading,
		isFetching,
	} = useGetDashboardCompaniesGroupsByIdQuery(group_id);


	const student = group?.data.students.find(el => el.id === student_id);

	const items = useItemsStudent(student);

	return (
		<Spin spinning={isLoading || isFetching}>
			<UiCard
				style={{ height: "100%" }}
				title={student ? (
					<Space split={<Divider type={"vertical"} />}>
						{`${student?.first_name} ${student?.last_name}`}
						<Space>
							<Rate count={1} value={1} disabled={true} />
							{student?.rating}
						</Space>
						{student?.frozen_status?.is_frozen && (
							<UiTag icon={<Icon component={IoSnow} />} color={"cyan"}>
								Заморожен
							</UiTag>
						)}
					</Space>
				) : "Студент"}
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
