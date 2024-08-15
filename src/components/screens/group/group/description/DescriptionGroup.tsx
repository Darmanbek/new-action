import { Spin } from "antd";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { UiCard, UiDescriptions } from "src/components/ui";
import { useGetGroupsByIdQuery } from "src/services/index.api";

import { useItemsGroup } from "./useItemsGroup";

const DescriptionGroup: FC = () => {
	const { group_id } = useParams();

	const { data: group, isLoading, isFetching } = useGetGroupsByIdQuery(group_id);

	const items = useItemsGroup(group?.data);

	return (
		<Spin spinning={isLoading || isFetching}>
			<UiCard
				title={group ? group.data.name : "Группа"}
			>
				<UiDescriptions
					items={items}
					layout={"vertical"}
				/>
			</UiCard>
		</Spin>
	);
};

export { DescriptionGroup };
