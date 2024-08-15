import ReactEcharts from "echarts-for-react";
import { FC } from "react";
import { SectionContainer } from "src/components/shared";
import { useGetFinanceCompaniesQuery } from "src/services/finance/finance.api";

import { useOptionsFinanceCompanies } from "./useOptionsFinanceCompanies";

const ChartFinanceCompanies: FC = () => {

	const { data: finances } = useGetFinanceCompaniesQuery({});

	const options = useOptionsFinanceCompanies(finances?.data);

	return (
		<SectionContainer>
			<ReactEcharts option={options} />
		</SectionContainer>
	);
};

export { ChartFinanceCompanies };
