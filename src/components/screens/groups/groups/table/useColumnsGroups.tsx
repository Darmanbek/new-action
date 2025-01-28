import { DeleteOutlined, EditOutlined, EyeFilled } from "@ant-design/icons"
import { Space, Tooltip } from "antd"
import type { ColumnsType } from "antd/es/table"
import dayjs from "dayjs"
import { Link, useNavigate } from "react-router-dom"
import { GlobalPopconfirm } from "src/components/shared"
import { UiBadge, UiButton, UiFilterIcon, UiTag } from "src/components/ui"
import { completeData } from "src/data"
import { useAuth } from "src/hooks"
import { type TGroup, useDeleteGroupsMutation } from "src/services/groups"
import { useGetDayQuery } from "src/services/shared/day"
import { useFormStorageStore } from "src/store"
import {
	completeColor,
	completeIcon,
	completeName,
	dayColor,
	dayTranslation,
	formatEmpty,
	monthGrammar,
	priceFormatter
} from "src/utils"

export const useColumnsGroups = () => {
	const { isDirector } = useAuth()
	const navigate = useNavigate()
	const { mutate: deleteGroups } = useDeleteGroupsMutation()
	const { data: days } = useGetDayQuery()
	const setParamsForm = useFormStorageStore((state) => state.setParamsForm)
	const onEditGroups = (item: TGroup) => setParamsForm(item)

	const columns: ColumnsType<TGroup> = [
		{
			width: 50,
			ellipsis: true,
			title: "№",
			dataIndex: "index",
			key: "index",
			render: (_v, group, index) => (
				<Tooltip title={group.is_completed ? "Завершён" : "В процессе"}>
					<UiBadge status={group.is_completed ? "success" : "processing"} text={index + 1} />
				</Tooltip>
			)
		},
		{
			ellipsis: true,
			title: "Название",
			dataIndex: "name",
			key: "name",
			render: formatEmpty
		},
		{
			ellipsis: true,
			title: "Учитель",
			dataIndex: "teachers",
			key: "teachers",
			render: (teachers: TGroup["teachers"]) => {
				const teacher = teachers.find((t) => !t.assistant)
				return teacher ? (
					isDirector ? (
						`${teacher.first_name} ${teacher.last_name}`
					) : (
						<Link onClick={(e) => e.stopPropagation()} to={`/teachers/${teacher.id}`}>
							{`${teacher.first_name} ${teacher.last_name}`}
						</Link>
					)
				) : (
					"-"
				)
			}
		},
		{
			ellipsis: true,
			title: "Ассистент",
			dataIndex: "teachers",
			key: "assistant",
			render: (teachers: TGroup["teachers"]) => {
				const assistant = teachers.find((t) => t.assistant)
				return assistant ? (
					isDirector ? (
						`${assistant.first_name} ${assistant.last_name}`
					) : (
						<Link onClick={(e) => e.stopPropagation()} to={`/teachers/${assistant.id}`}>
							{`${assistant.first_name} ${assistant.last_name}`}
						</Link>
					)
				) : (
					"-"
				)
			}
		},
		{
			align: "center",
			ellipsis: true,
			title: "Дни",
			dataIndex: "day",
			key: "day",
			render: (day: TGroup["day"]) => (
				<UiTag color={dayColor(day.id)}>{dayTranslation(day?.name)}</UiTag>
			),
			filters: days?.data.map((el) => ({
				value: el.id,
				text: dayTranslation(el.name)
			})),
			filterIcon: <UiFilterIcon />,
			filterMultiple: false
		},
		{
			ellipsis: true,
			title: "Стартовая дата",
			dataIndex: "start_date",
			key: "start_date",
			render: (start_date: TGroup["start_date"]) => (
				<>
					<p>{dayjs(start_date).format("D MMMM YYYY")}</p>
					<p>{dayjs(start_date).format("HH:mm")}</p>
				</>
			)
		},
		{
			ellipsis: true,
			title: "Длительность",
			dataIndex: "duration",
			key: "duration",
			render: (duration: number) => `${duration} ${monthGrammar(duration.toString())}`
		},
		{
			title: "Цена",
			dataIndex: "price",
			key: "price",
			render: priceFormatter
			// sorter: true,
		},
		{
			align: "center",
			title: "Студентов",
			dataIndex: "students_count",
			key: "students_count",
			render: (students_count) => <UiTag color={"red"}>{formatEmpty(students_count)}</UiTag>
		},
		{
			align: "center",
			title: "Статус",
			dataIndex: "is_completed",
			key: "is_completed",
			render: (is_completed: boolean) => (
				<UiTag icon={completeIcon(is_completed)} color={completeColor(is_completed)}>
					{completeName(is_completed)}
				</UiTag>
			),
			filters: completeData,
			filterIcon: <UiFilterIcon />,
			filterMultiple: false
		},
		{
			fixed: "right",
			align: "center",
			width: 150,
			dataIndex: "actions",
			title: "Действия",
			key: "action",
			render: (_, group) => (
				<Space onClick={(e) => e.stopPropagation()}>
					<Tooltip title={"Смотреть"}>
						<UiButton
							shape={"circle"}
							icon={<EyeFilled />}
							onClick={() => navigate(`/groups/${group.id}`)}
							aria-label={"View"}
						/>
					</Tooltip>
					{isDirector ? null : (
						<>
							<Tooltip title={"Изменить"}>
								<UiButton
									type={"primary"}
									shape={"circle"}
									color={"orange"}
									icon={<EditOutlined />}
									onClick={() => onEditGroups(group)}
									aria-label={"Edit"}
								/>
							</Tooltip>
							<GlobalPopconfirm onConfirm={() => deleteGroups(group.id)} title={group.name}>
								<Tooltip title={"Удалить"}>
									<UiButton
										type={"primary"}
										shape={"circle"}
										danger={true}
										icon={<DeleteOutlined />}
										aria-label={"Delete"}
									/>
								</Tooltip>
							</GlobalPopconfirm>
						</>
					)}
				</Space>
			)
		}
	]

	return columns
}
