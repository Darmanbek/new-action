import { ArrowLeftOutlined } from "@ant-design/icons";
import { Divider, Space, Spin, Tooltip } from "antd";
import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UiButton, UiCard, UiDescriptions, UiTag } from "src/components/ui";
import { useGetGroupsByIdQuery } from "src/services/index.api";
import { completeColor, completeIcon, completeName } from "src/utils";

import { useItemsGroup } from "./useItemsGroup";

const DescriptionGroup: FC = () => {
	const navigate = useNavigate();
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
							color={completeColor(group?.data?.is_completed)}
							icon={completeIcon(group?.data?.is_completed)}
						>
							{completeName(group?.data?.is_completed)}
						</UiTag>
					</Space>

				) : "Группа"}
				extra={
					<Tooltip title={"Назад"}>
						<UiButton type={"primary"} icon={<ArrowLeftOutlined />} onClick={() => navigate(-1)}/>
					</Tooltip>
				}
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
