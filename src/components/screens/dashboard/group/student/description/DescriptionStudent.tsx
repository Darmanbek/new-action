import { ArrowLeftOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UiCard, UiDescriptions, UiTooltipButton } from "src/components/ui";
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
				title={student ? `${student?.first_name} ${student?.last_name}` : "Студент"}
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
