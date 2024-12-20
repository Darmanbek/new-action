import { Col, Row } from "antd";
import {
	StatisticFinanceCompanies
} from "./statistic/StatisticFinanceCompanies";
import { ChartFinanceCompanies } from "./chart/ChartFinanceCompanies";
import { TableFinanceCompanies } from "./table/TableFinanceCompanies";

export default function Finances() {
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
	);
}
