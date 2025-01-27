import type { ColumnsType } from "antd/es/table"
import type { TAssessment } from "src/services/shared"
// import { ApproveCheckValue } from "src/components/shared";
import { formatEmpty, formatShortDate } from "src/utils"

export const useColumnsAssessments = () => {
	const columns: ColumnsType<TAssessment> = [
		{
			ellipsis: true,
			title: "Дата",
			dataIndex: "date",
			key: "date",
			rowScope: "row",
			render: formatShortDate
		},
		{
			ellipsis: true,
			title: "Балл",
			dataIndex: "value",
			key: "value",
			render: formatEmpty
		}
		// {
		// 	align: "center",
		// 	ellipsis: true,
		// 	title: "Присутствовал",
		// 	dataIndex: "is_available",
		// 	key: "is_available",
		// 	render: (is_available: boolean) => (
		// 		<ApproveCheckValue
		// 			colorInverse={true}
		// 			isValue={is_available}
		// 			yesText={"Был"}
		// 			noText={"Нет"}
		// 		/>
		// 	),
		// },
		// {
		// 	align: "center",
		// 	ellipsis: true,
		// 	title: "Причина отсутствия",
		// 	dataIndex: "consented",
		// 	key: "consented",
		// 	render: (consented: boolean | null) => consented ? (
		// 		<ApproveCheckValue
		// 			colorInverse={true}
		// 			isValue={consented}
		// 			yesText={"Был"}
		// 			noText={"Нет"}
		// 		/>
		// 	) : "-",
		// },
		// {
		// 	align: "center",
		// 	ellipsis: true,
		// 	title: "Бесплатное занятие",
		// 	dataIndex: "is_free",
		// 	key: "is_free",
		// 	render: (is_free: boolean) => (
		// 		<ApproveCheckValue
		// 			colorInverse={true}
		// 			isValue={is_free}
		// 			yesText={"Был"}
		// 			noText={"Нет"}
		// 		/>
		// 	),
		// },
		// {
		// 	align: "center",
		// 	ellipsis: true,
		// 	title: "Праздничный день",
		// 	dataIndex: "holiday",
		// 	key: "holiday",
		// 	render: (holiday: boolean) => (
		// 		<ApproveCheckValue
		// 			colorInverse={true}
		// 			isValue={holiday}
		// 			yesText={"Был"}
		// 			noText={"Нет"}
		// 		/>
		// 	),
		// },
		// {
		// 	align: "center",
		// 	ellipsis: true,
		// 	title: "Экзамен",
		// 	dataIndex: "is_exam",
		// 	key: "is_exam",
		// 	render: (is_exam: boolean) => (
		// 		<ApproveCheckValue
		// 			colorInverse={true}
		// 			isValue={is_exam}
		// 			yesText={"Был"}
		// 			noText={"Нет"}
		// 		/>
		// 	),
		// },
	]

	return columns
}
