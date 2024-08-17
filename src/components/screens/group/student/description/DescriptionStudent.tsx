import { ArrowLeftOutlined } from "@ant-design/icons";
import { Spin, Tooltip } from "antd";
import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UiButton, UiCard, UiDescriptions } from "src/components/ui";
import { useGetGroupsByIdQuery } from "src/services/index.api";

import { useItemsStudent } from "./useItemsStudent";

const DescriptionStudent: FC = () => {
	const navigate = useNavigate();
	const { group_id, student_id } = useParams();
	const { data: group, isLoading, isFetching } = useGetGroupsByIdQuery(group_id);

	const student = group?.data.students.find(el => el.id === student_id);

	const items = useItemsStudent(student);

	return (
		<Spin spinning={isLoading || isFetching}>
			<UiCard
				style={{ height: "100%" }}
				title={student ? `${student?.first_name} ${student?.last_name}` : "Студент"}
				extra={
					<Tooltip title="Назад" key="Back">
						<UiButton
							key="Back_Button"
							type="primary"
							icon={<ArrowLeftOutlined />}
							onClick={() => navigate(-1)}
						/>
					</Tooltip>
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
