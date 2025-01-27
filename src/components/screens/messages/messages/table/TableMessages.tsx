import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { HeadTable } from "src/components/shared"
import { UiTable } from "src/components/ui"
import { type TMessage, useGetMessageQuery } from "src/services/chat"
import { useColumnsMessages } from "./useColumnsMessages"

const TableMessages: FC = () => {
	const navigate = useNavigate()
	const { data: messages, isLoading, isFetching } = useGetMessageQuery({})

	const columns = useColumnsMessages()

	return (
		<UiTable<TMessage>
			title={() => <HeadTable title={"Чат"} />}
			loading={isLoading || isFetching}
			dataSource={messages?.data}
			columns={columns}
			onRow={(data) => ({
				onClick: () => navigate(`/chat/${data.id}`)
			})}
		/>
	)
}

export { TableMessages }
