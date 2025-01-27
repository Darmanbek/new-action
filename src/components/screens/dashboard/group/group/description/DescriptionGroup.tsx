import { ArrowLeftOutlined } from "@ant-design/icons"
import { Divider, Space, Spin } from "antd"
import { FC } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { UiCard, UiDescriptions, UiTag, UiTooltipButton } from "src/components/ui"
import { useGetDashboardCompaniesGroupsByIdQuery } from "src/services/dashboard"
import { completeColor, completeIcon, completeName } from "src/utils"

import { useItemsGroup } from "./useItemsGroup"

const DescriptionGroup: FC = () => {
	const navigate = useNavigate()
	const { group_id } = useParams()

	const { data: group, isLoading, isFetching } = useGetDashboardCompaniesGroupsByIdQuery(group_id)

	const items = useItemsGroup(group?.data)

	return (
		<Spin spinning={isLoading || isFetching}>
			<UiCard
				title={
					group ? (
						<Space split={<Divider type={"vertical"} />}>
							{group?.data?.name}
							<UiTag
								color={completeColor(group?.data?.is_completed)}
								icon={completeIcon(group?.data?.is_completed)}
							>
								{completeName(group?.data?.is_completed)}
							</UiTag>
						</Space>
					) : (
						"Группа"
					)
				}
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
				<UiDescriptions items={items} layout={"vertical"} />
			</UiCard>
		</Spin>
	)
}

export { DescriptionGroup }
