import { DeleteOutlined } from "@ant-design/icons"
import type { TableRowSelection } from "antd/es/table/interface"
import { type Key, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalPopconfirm, HeadTable } from "src/components/shared"
import { UiBadge, UiTable, UiTooltipButton } from "src/components/ui"
import { useAuth } from "src/hooks"
import { useDeleteGroupsStudentsMutation, useGetGroupsByIdStudentsQuery } from "src/services/groups"
import type { TStudent } from "src/services/shared/shared.types"
import { useColumnsStudents } from "./useColumnsStudents"

export const TableStudents = () => {
	const { isDirector } = useAuth()
	const { group_id } = useParams()
	// const navigate = useNavigate();
	const { data: students, isLoading, isFetching } = useGetGroupsByIdStudentsQuery(group_id)

	const { mutate: deleteGroupsStudents, isLoading: isDeleting } =
		useDeleteGroupsStudentsMutation(group_id)

	const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([])

	const onDeleteGroupsStudents = () => {
		deleteGroupsStudents(
			{
				student_id: selectedRowKeys.map((el) => el.toString())
			},
			{
				onSuccess: () => {
					setSelectedRowKeys([])
				}
			}
		)
	}

	const onSelectChange = (newSelectedRowKeys: Key[]) => {
		setSelectedRowKeys(newSelectedRowKeys)
	}

	const rowSelection: TableRowSelection<TStudent> = {
		selectedRowKeys,
		onChange: onSelectChange
	}

	const hasSelected = selectedRowKeys.length > 0

	const columns = useColumnsStudents()

	return (
		<UiTable<TStudent>
			title={() => (
				<HeadTable
					title={"Студенты"}
					children={
						isDirector
							? []
							: [
									<UiBadge count={selectedRowKeys.length} key={"Badge Delete"}>
										<GlobalPopconfirm
											title={`Удалить студентов: ${selectedRowKeys.length}`}
											onConfirm={onDeleteGroupsStudents}
										>
											<UiTooltipButton
												title={"Удалить"}
												loading={isDeleting}
												type={"primary"}
												disabled={!hasSelected}
												icon={<DeleteOutlined />}
											>
												Удалить
											</UiTooltipButton>
										</GlobalPopconfirm>
									</UiBadge>
								]
					}
				/>
			)}
			rowKey={(data) => data.key}
			dataSource={students?.data.map((el) => ({ ...el, key: el.id }))}
			rowSelection={isDirector ? undefined : rowSelection}
			// onRow={(data) => ({
			// 	onClick: () => navigate(`students/${data.id}`),
			// })}
			columns={columns}
			loading={isLoading || isFetching}
			pagination={false}
		/>
	)
}
