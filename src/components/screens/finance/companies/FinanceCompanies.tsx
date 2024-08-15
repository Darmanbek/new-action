import { Col, Row } from "antd";
import { FC } from "react";
import { StatisticFinanceCompanies } from "./statistic/StatisticFinanceCompanies";
import { ChartFinanceCompanies } from "./chart/ChartFinanceCompanies";
import { TableFinanceCompanies } from "./table/TableFinanceCompanies";

const FinanceCompanies: FC = () => {
	return (
		<>
			<Row gutter={8}>
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
};

export default FinanceCompanies;
