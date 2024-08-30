import Icon from "@ant-design/icons";
import { Rate, Space, Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";
import { Dayjs } from "dayjs";
import { useCallback, useEffect } from "react";
import { IoSnow } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { AssessmentsTitle, AssessmentsValue } from "src/components/shared";
import { UiTag } from "src/components/ui";
import {
	useGetDashboardCompaniesGroupsByIdCalendarQuery,
	useGetDashboardCompaniesGroupsByIdLessonsQuery,
	useGetDashboardHolidaysQuery,
} from "src/services/index.api";
import { TGroupAssessment } from "src/services/index.types";
import { useAuthPersistStore } from "src/store";
import { dateFormatter } from "src/utils";

export const useColumnsAssessments = (date: Dayjs) => {
	const company = useAuthPersistStore(
		state => state.company,
	);
	const { group_id } = useParams();

	const {
		data: calendar,
	} = useGetDashboardCompaniesGroupsByIdCalendarQuery({
		date: [date.startOf("month").format("YYYY-MM-DD"), date.endOf("month").format("YYYY-MM-DD")],
	}, group_id);
	const {
		data: lessons,
	} = useGetDashboardCompaniesGroupsByIdLessonsQuery(group_id);

	const { data: holiday } = useGetDashboardHolidaysQuery({
		date: [date.startOf("month").format("YYYY-MM-DD"), date.endOf("month").format("YYYY-MM-DD")],
	}, company?.id);

	const updateCursor = (ele: HTMLDivElement) => {
		ele.style.cursor = "grabbing";
		ele.style.userSelect = "none";
	};

	const resetCursor = (ele: HTMLDivElement) => {
		ele.style.cursor = "grab";
		ele.style.removeProperty("user-select");
	};

	const handleMouseDown = useCallback((e: any) => {
		const ele = document.querySelector(".ant-table-content");
		if (!calendar) return;
		if (!ele) {
			return;
		}
		const startPos = {
			left: ele.scrollLeft,
			top: ele.scrollTop,
			x: e.clientX,
			y: e.clientY,
		};

		const handleMouseMove = (e: MouseEvent) => {
			const dx = e.clientX - startPos.x;
			const dy = e.clientY - startPos.y;
			ele.scrollTop = startPos.top - dy;
			ele.scrollLeft = startPos.left - dx;
			updateCursor(ele as HTMLDivElement);
		};

		const handleMouseUp = () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
			resetCursor(ele as HTMLDivElement);
		};

		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseup", handleMouseUp);
	}, [calendar]);

	useEffect(() => {
		const content = document.querySelector(".ant-table-content");
		if (!calendar) return;
		if (!content) return;
		const onWheel = (e: any) => {
			if (e.deltaY === 0) return;
			e.preventDefault();
			content.scrollTo({
				left: content.scrollLeft + e.deltaY,
				// behavior: "smooth",
			});
		};
		content.addEventListener("wheel", onWheel);
		content.addEventListener("mousedown", handleMouseDown);
		return () => {
			content.removeEventListener("wheel", onWheel);
			content.removeEventListener("mousedown", handleMouseDown);
		};
	}, [calendar, handleMouseDown]);
	const columns: ColumnsType<TGroupAssessment> = calendar?.data.map(date => ({
		align: "center",
		ellipsis: true,
		title: () => <AssessmentsTitle date={date} holiday={holiday?.data} lessons={lessons?.data} />,
		key: date,
		onHeaderCell: () => {
			const lesson = lessons?.data.find(el => dateFormatter(el.date) === dateFormatter(date));

			const isHoliday = holiday?.data.some(el => dateFormatter(el.date) === dateFormatter(date)) ?? false;

			const getValue = () => {
				if (lesson) {
					if (lesson.is_exam) {
						return {
							backgroundColor: "#fff1f0",
							color: "#cf1322",
						};
					}
					if (lesson.is_free) {
						return {
							backgroundColor: "#e6f4ff",
							color: "#0958d9",
						};
					}
				}
				if (isHoliday) {
					return {
						backgroundColor: "#f6ffed",
						color: "#389e0d",
					};
				}
				return {};
			};

			const style = getValue();

			return ({
				style,
				id: date,
			});
		},
		onCell: () => {
			const lesson = lessons?.data.find(el => dateFormatter(el.date) === dateFormatter(date));

			const isHoliday = !!holiday?.data.find(el => dateFormatter(el.date) === dateFormatter(date));

			const getValue = () => {
				if (lesson) {
					if (lesson.is_exam) {
						return {
							backgroundColor: "#fff1f0",
							color: "#cf1322",
						};
					}
					if (lesson.is_free) {
						return {
							backgroundColor: "#e6f4ff",
							color: "#0958d9",
						};
					}
				}
				if (isHoliday) {
					return {
						backgroundColor: "#f6ffed",
						color: "#389e0d",
					};
				}
				return {};
			};

			const style = getValue();

			return ({
				style,
			});
		},

		render: (_v, assessment) => <AssessmentsValue date={date} assessments={assessment.assessments} />,
	})) || [];

	columns.unshift({
		ellipsis: true,
		fixed: "left",
		// rowScope: "row",
		title: "Студент",
		key: "student",
		render: (_v, student) => (
			<Space>
				<Link to={`students/${student.id}`}>
					{`${student.first_name} ${student.last_name}`}
				</Link>
				{student?.frozen_status?.is_frozen && (
					<Tooltip title={"Заморожен"}>
						<UiTag icon={<Icon component={IoSnow} />} color={"cyan"} />
					</Tooltip>
				)}
			</Space>
		),
	});

	columns.push({
		ellipsis: true,
		fixed: "right",
		// rowScope: "row",
		title: "Рейтинг",
		key: "rating",
		render: (_v, student) => (
			<Space>
				<Rate count={1} value={1} disabled={true} />
				{student?.rating}
			</Space>
		),
	});

	return columns;
};
