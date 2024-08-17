import { CheckCircleOutlined, SyncOutlined } from "@ant-design/icons";
import { Divider, Space, Spin } from "antd";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { UiCard, UiDescriptions, UiTag } from "src/components/ui";
import { useGetGroupsByIdQuery } from "src/services/index.api";

import { useItemsGroup } from "./useItemsGroup";

const DescriptionGroup: FC = () => {
	const { group_id } = useParams();

	const { data: group, isLoading, isFetching } = useGetGroupsByIdQuery(group_id);

	const items = useItemsGroup(group?.data);

	return (
		<Spin spinning={isLoading || isFetching}>
			<UiCard
				title={group ? (
					<Space split={<Divider type={"vertical"} />}>
						{group.data.name}
						<UiTag
							color={group?.data?.is_completed ? "success" : "processing"}
							icon={group?.data?.is_completed ? <CheckCircleOutlined /> : <SyncOutlined spin={true} />}
						>
							{group?.data?.is_completed ? "Завершено" : "В процессе"}
						</UiTag>
					</Space>

				) : "Группа"}
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
