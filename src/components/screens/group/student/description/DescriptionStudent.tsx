import { Spin } from "antd";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { UiCard, UiDescriptions } from "src/components/ui";
import { useGetGroupsByIdQuery } from "src/services/index.api";

import { useItemsStudent } from "./useItemsStudent";

const DescriptionStudent: FC = () => {
	const { group_id, student_id } = useParams();
	const { data: group, isLoading, isFetching } = useGetGroupsByIdQuery(group_id);

	const student = group?.data.students.find(el => el.id === student_id);

	const items = useItemsStudent(student);

	return (
		<Spin spinning={isLoading || isFetching}>
			<UiCard
				title={student ? `${student?.first_name} ${student?.last_name}` : "Студент"}
			>
				<UiDescriptions
					items={items}
					layout={"vertical"}
				/>
			</UiCard>
		</Spin>
	);
};

export { DescriptionStudent };
