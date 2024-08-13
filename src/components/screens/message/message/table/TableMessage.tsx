import { FC } from "react";
import { HeadTable } from "src/components/shared";
import { UiTable } from "src/components/ui";
import { useGetMessageQuery } from "src/services/index.api";
import { TMessage } from "src/services/index.types";

import { useColumnsMessage } from "./useColumnsMessage";

const TableMessage: FC = () => {
	const { data: messages, isLoading, isFetching } = useGetMessageQuery({});

	const columns = useColumnsMessage();

	return (
		<UiTable<TMessage>
			title={() => (
				<HeadTable
					title={"Чат"}
				/>
			)}
			loading={isLoading || isFetching}
			dataSource={messages?.data}
			columns={columns}
		/>
	);
};

export { TableMessage };
