import { Flex, Spin } from "antd";
import dayjs from "dayjs";
import { FC, useEffect, useRef } from "react";
import { MessageBox } from "react-chat-elements";
import { useParams } from "react-router-dom";
import { InputChat } from "src/components/screens/message/chat/input/InputChat";
import { UiCard } from "src/components/ui";
import { useGetMessageByIdQuery, useGetMessageQuery } from "src/services/index.api";

const Chat: FC = () => {
	const { chat_id } = useParams();
	const cardRef = useRef<HTMLDivElement>(null);

	const { data: messages } = useGetMessageQuery({});
	const { data: chat, isLoading, isFetching } = useGetMessageByIdQuery(chat_id);


	const scrollToBottom = () => {
		if (cardRef.current) {
			cardRef.current.scrollIntoView();
		}
	};

	useEffect(() => {
		if (chat) {
			scrollToBottom();
		}
	}, [chat]);
	return (
		<>
			<UiCard
				loading={isLoading}
				title={messages ? <span style={{ textTransform: "capitalize" }}>{
					`${
						messages.data.find(el => el.id === chat_id)?.first_name
					} ${
						messages.data.find(el => el.id === chat_id)?.last_name
					}`
				}</span> : "Чат"}
				styles={{
					title: {
						fontWeight: 500,
						fontSize: "1.25rem",
					},
					body: {
						overflowX: "hidden",
						overflowY: "auto",
						flexGrow: 1,
						// scrollBehavior: "smooth",
					},
					actions: {
						padding: "0 16px 16px"
					}
				}}
				style={{
					flexGrow: 1,
					height: "calc(100vh - 148px)", // 6
					display: "flex",
					flexDirection: "column"
				}}
				actions={[
					<InputChat />
				]}
			>
				<Spin spinning={isFetching}>
					<Flex vertical={true} gap={8} style={{ flexDirection: "column-reverse" }}>
						{chat?.data?.map(item => (
							<MessageBox
								key={item.message_id}
								focus={false}
								status={(!item.closed && item.is_answer) ? "sent" : "read"}
								title={""}
								forwarded={false}
								notch={true}
								removeButton={false}
								replyButton={false}
								dateString={item.date}
								retracted={false}
								titleColor={""}
								id={item.message_id}
								position={item.is_answer ? "right" : "left"}
								type="text"
								text={item.message}
								date={dayjs(item.date).toDate()}
							/>
						))}
					</Flex>
				</Spin>
				<div ref={cardRef} />
			</UiCard>
		</>
	);
};

export default Chat;
