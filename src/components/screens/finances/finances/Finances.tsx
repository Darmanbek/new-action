import { Col, Row } from "antd"
import { ChartFinanceCompanies } from "./chart/ChartFinanceCompanies"
import { StatisticFinanceCompanies } from "./statistic/StatisticFinanceCompanies"
import { TableFinanceCompanies } from "./table/TableFinanceCompanies"

const Finances = () => {
	return (
		<>
			<Row gutter={20}>
				<Col span={10}>
					<StatisticFinanceCompanies />
				</Col>
				<Col span={14}>
					<ChartFinanceCompanies />
				</Col>
			</Row>
			<TableFinanceCompanies />
		</>
	)
}

export default Finances
