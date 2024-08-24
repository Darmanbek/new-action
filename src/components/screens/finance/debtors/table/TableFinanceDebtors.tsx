import { useState } from "react";
import { HeadTable, SearchListInput } from "src/components/shared";
import { UiTable } from "src/components/ui";
import { useGetDebtorsQuery } from "src/services/index.api";
import { useColumnsDebtors } from "./useColumnsDebtors";
import { useSearchListStore } from "src/store";

export const TableFinanceDebtors = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
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
          children={[<SearchListInput key={"Search"} placeholder="Поиск" />]}
        />
      )}
      dataSource={debtors?.data}
      columns={columns}
      loading={isLoading || isFetching}
      pagination={{
        total: debtors?.meta?.total,
        current: currentPage,
        onChange: (value) => setCurrentPage(value),
      }}
    />
  );
};
