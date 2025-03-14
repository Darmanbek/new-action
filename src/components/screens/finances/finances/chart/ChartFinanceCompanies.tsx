import ReactEcharts from "echarts-for-react"
import { FC } from "react"
import { SectionContainer } from "src/components/shared"
import { useGetFinancesCompaniesQuery } from "src/services/finances/finances.api"
import { useOptionsFinanceCompanies } from "./useOptionsFinanceCompanies"

const ChartFinanceCompanies: FC = () => {
	const { data: finances } = useGetFinancesCompaniesQuery({})

	const options = useOptionsFinanceCompanies(finances?.data)

	return (
		<SectionContainer style={{ height: "100%" }}>
			<ReactEcharts option={options} style={{ minHeight: "50vh" }} />
		</SectionContainer>
	)
}

export { ChartFinanceCompanies }
