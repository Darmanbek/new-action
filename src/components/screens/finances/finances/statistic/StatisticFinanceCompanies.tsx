import { Divider, Flex, Space } from "antd"
import { FC } from "react"
import { BsBuildings } from "react-icons/bs"
import { FaCoins } from "react-icons/fa"
import { UiCard, UiStatistic } from "src/components/ui"
import { useGetFinancesCompaniesQuery } from "src/services/finances/finances.api"

const StatisticFinanceCompanies: FC = () => {
	const { data: finances } = useGetFinancesCompaniesQuery({})

	return (
		<Flex vertical={true} gap={20} style={{ height: "100%" }}>
			<UiCard>
				<UiStatistic
					title={"Всего платежей"}
					value={finances?.data.gross_profit}
					valueRender={(node) => (
						<Flex justify={"space-between"} align={"end"}>
							<span>{node} uzs</span>
							<FaCoins color={"red"} />
						</Flex>
					)}
				/>
			</UiCard>
			<UiCard style={{ height: "100%" }}>
				<Space direction={"vertical"} style={{ width: "100%" }} split={<Divider />}>
					{finances?.data.companies.map((company) => (
						<UiStatistic
							key={company.id}
							title={company.name}
							value={company.total_amount}
							// suffix={"uzs"}
							valueRender={(node) => (
								<Flex justify={"space-between"} align={"end"}>
									<span>{node} uzs</span>
									<BsBuildings color={"blue"} />
								</Flex>
							)}
						/>
					))}
				</Space>
			</UiCard>
		</Flex>
	)
}

export { StatisticFinanceCompanies }
