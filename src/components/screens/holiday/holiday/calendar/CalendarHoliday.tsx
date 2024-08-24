import { CalendarOutlined, CheckCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Calendar, Divider, Flex, Space, Spin, Tooltip, Typography } from "antd";
import dayjs from "dayjs";
import { FC, useEffect, useState } from "react";
import dayLocaleData from "dayjs/plugin/localeData";
import isBetween from "dayjs/plugin/isBetween";
import "dayjs/locale/ru";
import { GlobalPopconfirm } from "src/components/shared";
import { UiButton, UiCard, UiDatePicker, UiTag, UiTooltipButton } from "src/components/ui";
import { useCreateHolidayMutation, useGetHolidayQuery } from "src/services/holiday/holiday.api";

dayjs.extend(dayLocaleData);
dayjs.extend(isBetween);
dayjs.locale("ru");

const CalendarHoliday: FC = () => {
	const [date, setDate] = useState(dayjs());
	const [currentDate, setCurrentDate] = useState(dayjs());
	const { data: holiday, isLoading, isFetching } = useGetHolidayQuery({
		date: [
			date ? date.startOf("month").format("YYYY-MM-DD") : "",
			date ? date.endOf("month").format("YYYY-MM-DD") : "",
		],
	});

	const { mutate: createHoliday, isLoading: addLoading } = useCreateHolidayMutation();

	const isHoliday = (date: string) => {
		return !!holiday?.data.find(el => el.date === date);
	};

	useEffect(() => {
		const [start, end] = [date.startOf("month"), date.endOf("month")];
		if (currentDate.isBetween(start, end)) return;
		if (!currentDate.isBetween(start, end)) {
			setCurrentDate(start);
		}
		if (dayjs().isBetween(start, end)) {
			setCurrentDate(dayjs());
		}
	}, [currentDate, date]);
	return (
		<UiCard
			style={{
				overflow: "hidden",

			}}
			styles={{
				header: {
					padding: 16,
				},
				title: {
					fontWeight: 500,
					fontSize: 20,
				},
				body: {
					padding: 0,
					overflow: "hidden",
				},
			}}
			title={"Праздничные дни"}
			extra={
				<Space>
					<Space.Compact>
						<UiDatePicker
							picker={"month"}
							value={date}
							onChange={(date) => {
								setDate(date);
							}}
							format={"YYYY MMMM"}
							allowClear={false}
						/>
						<Tooltip title={"Текущий месяц"}>
							<UiButton
								type={"primary"}
								icon={<CalendarOutlined />}
								onClick={() => setDate(dayjs())}
							/>
						</Tooltip>
					</Space.Compact>
				</Space>
			}
		>
			<Spin spinning={isLoading || isFetching}>
				<Calendar
					mode={"month"}
					value={currentDate}
					onChange={setCurrentDate}
					// disabledDate={(date) => !!holiday?.data.find(el => el.date === date.format("YYYY-MM-DD"))}
					validRange={date ? [date.startOf("month"), date.endOf("month")] : [dayjs().startOf("month"), dayjs().endOf("month")]}
					headerRender={({ value }) => {

						return (
							<Flex style={{ padding: 16 }}>
								<Typography.Title level={4} style={{ fontWeight: 500 }}>
									<Space split={<Divider type={"vertical"} />}>
										{value.format("D MMMM YYYY")}
										{isHoliday(currentDate.format("YYYY-MM-DD")) &&
											<UiTag icon={<CheckCircleOutlined />} color={"green"}>
												Выходной
											</UiTag>}
									</Space>
								</Typography.Title>
							</Flex>
						);
					}}

					cellRender={(date) => {
						if (!holiday) return null;
						// originNode.props.children.push(<h1>Выходной</h1>)
						if (holiday.data.find(el => el.date === date.format("YYYY-MM-DD"))) {
							return (
								<Flex justify={"center"} align={"center"} style={{
									textAlign: "center",
									backgroundColor: "#f6ffed",
									color: "#389e0d",
									width: "100%",
									height: "100%",
									borderRadius: 8,
								}}>
									<h1>Выходной</h1>
								</Flex>
							);
						}
						if (date.format("YYYY-MM-DD") === currentDate.format("YYYY-MM-DD")) {
							return (
								<Flex
									justify={"center"}
									align={"center"} style={{
									width: "100%",
									height: "100%",
									borderRadius: 8,
								}}>
									<GlobalPopconfirm
										title={date.format("D MMMM YYYY")}
										onConfirm={() => createHoliday({ date: date.format("YYYY-MM-DD") })}
									>
										<UiTooltipButton
											title={"Сделать праздничным днём"}
											type={"primary"}
											loading={addLoading}
											icon={<PlusOutlined />}
										>
											Выходной
										</UiTooltipButton>
									</GlobalPopconfirm>
								</Flex>
							);
						}
					}}
				/>
			</Spin>
		</UiCard>
	);
};

export { CalendarHoliday };
