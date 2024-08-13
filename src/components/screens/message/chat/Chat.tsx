import { Flex, Input } from "antd";
import dayjs from "dayjs";
import { MessageBox } from "react-chat-elements";
import { FC } from "react";
import { IoSend } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { UiCard } from "src/components/ui";
import { useGetMessageByIdQuery } from "src/services/index.api";

const Chat: FC = () => {
	const { chat_id } = useParams();
	const { data: chat, isLoading, isFetching } = useGetMessageByIdQuery(chat_id);

	return (
		<>
			<UiCard
				loading={isLoading || isFetching}
				title={"Чат"}
				styles={{
					title: {
						fontWeight: 500,
						fontSize: "1.25rem",
					},
					body: {
						overflowX: "hidden",
						overflowY: "auto",
						flexGrow: 1
					},
					actions: {
						padding: "0 16px 16px"
					}
				}}
				style={{
					flexGrow: 1,
					display: "flex",
					flexDirection: "column"
				}}
				actions={[
					<Input suffix={<IoSend color={"royalblue"} style={{ fontSize: 21 }} />} />
				]}
			>
				<Flex vertical={true} gap={8}>
					{chat?.data.reverse().map(item => (
						<MessageBox
							focus={!item.closed}
							status={(!item.closed && item.is_answer) ? "sent" : "read"}
							title={""}
							forwarded={true}
							notch={true}
							removeButton={false}
							replyButton={false}
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
			</UiCard>
		</>
	);
};

export default Chat;
