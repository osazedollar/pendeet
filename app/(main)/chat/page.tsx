// import ChatList from "@/components/chat/chat-list";
// import ChatEmptyState from "@/components/chat/chat-empty-state";
// import { getConversations } from "@/data";
import ChatPage from "@/components/chat/chat-page";

export const metadata = {
  title: "Chat",
  description: "Chat with vendors and friends.",
};

// async function Chat() {
//   const conversations = await getConversations();
//   const selectedUser = "";

//   return (
//     <section className="grid grid-cols-1 md:grid-cols-[minmax(20rem,25rem)_auto] h-dvh w-full max-w-[1440px] mx-auto">
//       <div className="grid">
//         <ChatList conversations={conversations} />
//       </div>
//       <div className="hidden md:grid">
//         <ChatEmptyState />
//       </div>
//     </section>
//   );
// }

// export default Chat;
function Chat() {
  return <ChatPage />;
}

export default Chat;
