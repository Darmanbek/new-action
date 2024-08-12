// import { Empty, Modal, Skeleton } from 'antd';
// import React from 'react';
// import { useGetStudentsChatQuery } from 'src/services/index.api';
// import { useNumericStringVault, useToggleStore } from 'src/store';
// import { LeadsChatInput } from './input/LeadsChatInput';
// import { StudentChatItem } from './StudentChatItem';
// import s from './chat.module.scss';
//
// export const StudentsChat = () => {
//   const messagesContainerRef = React.useRef<HTMLUListElement>(null);
//   const { isChatModal, toggleChatModal } = useToggleStore();
//   const id = useNumericStringVault((state) => state.numericStringVault);
//   const {
//     data: messages,
//     isLoading,
//     isSuccess,
//   } = useGetStudentsChatQuery({});
//
//   React.useEffect(() => {
//     if (messagesContainerRef.current) {
//       messagesContainerRef.current.scrollTop =
//         messagesContainerRef.current.scrollHeight;
//     }
//   }, [messages?.data.length, id]);
//   return (
//     <Modal
//       title="Chat"
//       width={700}
//       open={isChatModal}
//       onCancel={toggleChatModal}
//       footer={<LeadsChatInput />}
//       centered
//     >
//       <ul className={s.items} ref={messagesContainerRef}>
//         {isLoading && <Skeleton />}
//         {isSuccess && !messages?.data.length && (
//           <Empty style={{ position: 'relative', top: 150 }} />
//         )}
//         {messages?.data.map((message) => (
//           <StudentChatItem {...message} />
//         ))}
//       </ul>
//     </Modal>
//   );
// };
