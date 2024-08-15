import { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { Tooltip } from "antd";
import { HeadTable, SearchListInput } from "src/components/shared";
import { UiButton, UiTable } from "src/components/ui";
import { useGetDebtorsQuery } from "src/services/index.api";
import { useColumnsDebtors } from "./useColumnsDebtors";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useSearchListStore } from "src/store";

export const TableFinanceDebtors = () => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const navigate = useNavigate();
	const debounceValue = useSearchListStore((state) => state.debounceValue);
	const {
		data: debtors,
		isLoading,
		isFetching,
	} = useGetDebtorsQuery({
		limit: 10,
		page: currentPage,
		search: debounceValue,
	});

	const columns = useColumnsDebtors();

	return (
		<UiTable
			title={() => (
				<HeadTable
					title="Должники"
					children={[
						<SearchListInput placeholder="Поиск" />,
						<Tooltip title="Назад" key="Back">
							<UiButton
								key="Back_Button"
								type="primary"
								icon={<ArrowLeftOutlined />}
								onClick={() => navigate(-1)}
							/>
						</Tooltip>,
					]}
				/>
			)}
			dataSource={debtors?.data}
			columns={columns as ColumnsType}
			loading={isLoading || isFetching}
			pagination={{
				total: debtors?.meta?.total,
				current: currentPage,
				onChange: (value) => setCurrentPage(value),
			}}
		/>
	);
};
