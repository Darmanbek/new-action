import { ArrowLeftOutlined, EditOutlined } from "@ant-design/icons"
import { Tooltip } from "antd"
import type { ColumnsType } from "antd/es/table"
import { useNavigate } from "react-router-dom"
import { HeadTable } from "src/components/shared"
import { UiButton, UiTable } from "src/components/ui"
import { useGetMeQuery } from "src/services/login"
import { useFormStorageStore } from "src/store"
import { useColumnsProfile } from "./useColumnsProfile"

export const TableProfile = () => {
	const { data: user, isLoading } = useGetMeQuery()
	const setParamsForm = useFormStorageStore((state) => state.setParamsForm)
	const navigate = useNavigate()
	const columns = useColumnsProfile()

	return (
		<UiTable
			title={() => (
				<HeadTable
					title={"Профиль"}
					children={[
						<Tooltip title={"Изменить"} key={"Edit"}>
							<UiButton
								key={"Edit_Button"}
								color={"orange"}
								type={"primary"}
								icon={<EditOutlined />}
								onClick={() => setParamsForm(user?.data)}
								aria-label={"Edit"}
							>
								Изменить
							</UiButton>
						</Tooltip>,
						<Tooltip title={"Назад"} key={"Back"}>
							<UiButton
								key={"Back_Button"}
								type={"primary"}
								icon={<ArrowLeftOutlined />}
								onClick={() => navigate(-1)}
							>
								Назад
							</UiButton>
						</Tooltip>
					]}
				/>
			)}
			dataSource={[user?.data] as any}
			columns={columns as ColumnsType}
			loading={isLoading}
			pagination={false}
		/>
	)
}
