import { ColumnsType } from "antd/es/table";
import { HeadTable, SearchListInput } from "src/components/shared";
import { UiTable } from "src/components/ui";
import { useGetAcceptanceQuery } from "src/services/index.api";
import { useSearchListStore, } from "src/store";
import { useColumnsAcceptance } from "./useColumnsAcceptance";

export const TableAcceptance = () => {
	const debounceValue = useSearchListStore((state) => state.debounceValue);
	const {
		data: acceptances,
		isLoading,
		isFetching,
	} = useGetAcceptanceQuery({
		search: debounceValue,
	});
	const columns = useColumnsAcceptance();

	return (
		<UiTable
			title={() => (
				<HeadTable
					title="Заявки"
					children={[
						<SearchListInput placeholder="Поиск" />,
					]}
				/>
			)}
			dataSource={acceptances?.data}
			columns={columns as ColumnsType}
			loading={isLoading || isFetching}
		/>
	);
};
