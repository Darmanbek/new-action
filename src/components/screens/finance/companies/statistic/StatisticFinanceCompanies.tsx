import { Flex } from "antd";
import { FC } from "react";
import { FaCoins } from "react-icons/fa";
import { UiCard, UiStatistic } from "src/components/ui";
import { useGetFinanceCompaniesQuery } from "src/services/finance/finance.api";

const StatisticFinanceCompanies: FC = () => {
	const { data: finances } = useGetFinanceCompaniesQuery({});

	return (
		<UiCard>
			<UiStatistic
				title={"Всего платежей"}
				value={finances?.data.gross_profit}
				valueRender={(node) => (
					<Flex justify={"space-between"} align={"end"}>
						<span>
							{node} uzs
						</span>
						<FaCoins color={"red"} />
					</Flex>
				)}
			/>
		</UiCard>
	);
};

export { StatisticFinanceCompanies };
