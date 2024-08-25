import { ArrowLeftOutlined } from "@ant-design/icons";
import { Divider, Space, Spin } from "antd";
import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UiCard, UiDescriptions, UiTag, UiTooltipButton } from "src/components/ui";
import { useGetDashboardCompaniesByIdQuery } from "src/services/index.api";
import { useAuthPersistStore } from "src/store";
import { completeColor, completeIcon, completeName } from "src/utils";

import { useItemsGroup } from "./useItemsGroup";

const DescriptionGroup: FC = () => {
	const navigate = useNavigate();
	const currentCompany = useAuthPersistStore(
		state => state.company,
	);
	const { group_id } = useParams();

	const {
		data: company,
		isLoading,
		isFetching,
	} = useGetDashboardCompaniesByIdQuery({}, currentCompany?.id);

	const group = company?.data.groups.find(el => el.id === group_id);

	const items = useItemsGroup(group);

	return (
		<Spin spinning={isLoading || isFetching}>
			<UiCard
				title={group ? (
					<Space split={<Divider type={"vertical"} />}>
						{group.name}
						<UiTag
							color={completeColor(group?.is_completed)}
							icon={completeIcon(group?.is_completed)}
						>
							{completeName(group?.is_completed)}
						</UiTag>
					</Space>

				) : "Группа"}
				extra={
					<UiTooltipButton
						title={"Назад"}
						type={"primary"}
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
				/>
			</UiCard>
		</Spin>
	);
};

export { DescriptionGroup };
