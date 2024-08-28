import { CalendarOutlined, CheckCircleOutlined, CloseOutlined, LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Calendar, Divider, Flex, Space, Spin, Tooltip, Typography } from "antd";
import dayjs from "dayjs";
import { FC, useEffect, useState } from "react";
import dayLocaleData from "dayjs/plugin/localeData";
import isBetween from "dayjs/plugin/isBetween";
import "dayjs/locale/ru";
import { GlobalPopconfirm } from "src/components/shared";
import { UiButton, UiCard, UiDatePicker, UiTag, UiTooltipButton } from "src/components/ui";
import { useResponsive } from "src/hooks";
import {
	useCreateHolidayMutation,
	useDeleteHolidayMutation,
	useGetHolidayQuery,
} from "src/services/holiday/holiday.api";

dayjs.extend(dayLocaleData);
dayjs.extend(isBetween);
dayjs.locale("ru");

const CalendarHoliday: FC = () => {
	const { isMobile } = useResponsive(768);
	const [date, setDate] = useState(dayjs());
	const [currentDate, setCurrentDate] = useState(dayjs());
	const { data: holiday, isLoading, isFetching } = useGetHolidayQuery({
		date: [
			date ? date.startOf("month").format("YYYY-MM-DD") : "",
			date ? date.endOf("month").format("YYYY-MM-DD") : "",
		],
	});

	const { mutate: createHoliday, isLoading: addLoading } = useCreateHolidayMutation();
	const { mutate: deleteHoliday, isLoading: deleteLoading } = useDeleteHolidayMutation();

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
					fullscreen={!isMobile}
					onChange={setCurrentDate}
					// disabledDate={(date) => !!holiday?.data.find(el => el.date === date.format("YYYY-MM-DD"))}
					validRange={date ? [date.startOf("month"), date.endOf("month")] : [dayjs().startOf("month"), dayjs().endOf("month")]}
					headerRender={({ value }) => {

						return (
							<Flex style={{ padding: 16 }}>
								<Typography.Title level={isMobile ? 5 : 4} style={{ fontWeight: 500 }}>
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
						const currentHoliday = holiday.data.find(el => el.date === date.format("YYYY-MM-DD"));
						const CustomCloseIcon = deleteLoading ? LoadingOutlined : CloseOutlined;
						if (currentHoliday) {
							return (
								<UiTag
									closable={date.format("YYYY-MM-DD") === currentDate.format("YYYY-MM-DD")}
									closeIcon={
										<CustomCloseIcon
											spin={deleteLoading}
											style={isMobile ? {
												fontSize: 18,
												color: "red",
											} : {
												fontSize: 18,
												color: "red",
												position: "absolute",
												top: "5%",
												right: "5%",
											}} />
									}
									onClose={() => deleteHoliday(currentHoliday.id)}
									color={"green"}
									style={{
										position: "relative",
										width: "100%",
										height: "100%",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									{isMobile ? <CheckCircleOutlined
										style={{
											fontSize: 18,
										}}
									/> : <h1>Выходной</h1>}
								</UiTag>
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
