import ChatInterface from "@/components/chat/chat-interface";
import { getConversations, getMessages } from "@/data";
import { notFound } from "next/navigation";

// This would be replaced with actual API calls
// async function getConversations(): Promise<Conversation[]> {
//   // Simulate API call
//   return [
//     {
//       id: "1",
//       name: "Jane Doe",
//       username: "@jd1999__",
//       avatar: "/avatars/jane1.jpg",
//       lastMessage:
//         "Hello, Any update on my order, i ought to have received it by now",
//       lastMessageTime: "8:10",
//       unreadCount: 3,
//       isOnline: true,
//     },
//     {
//       id: "2",
//       name: "Jayscloset",
//       username: "@jayscloset",
//       avatar: "/avatars/jay.jpg",
//       lastMessage: "Hi, is my order still on the way?",
//       lastMessageTime: "8:10",
//       unreadCount: 3,
//       isOnline: true,
//     },
//     {
//       id: "3",
//       name: "Spellz",
//       username: "@spellz",
//       avatar: "/avatars/spellz.jpg",
//       lastMessage: "I want to make some enquiries about a product in your shop",
//       lastMessageTime: "8:10",
//       unreadCount: 3,
//       isOnline: true,
//     },
//   ];
// }

async function getConversationById(id: string): Promise<Conversation | null> {
  const conversations = await getConversations();
  return conversations.find((c) => c.id === id) || null;
}

interface PageProps {
  params: Promise<{ id: string }>;
}

async function ChatDetails({ params }: PageProps) {
  const { id } = await params;

  const [conversations, activeConversation, messages] = await Promise.all([
    getConversations(),
    getConversationById(id),
    getMessages(id),
  ]);

  if (!activeConversation) {
    notFound();
  }

  return (
    <ChatInterface
      conversations={conversations}
      activeConversation={activeConversation}
      messages={messages}
      currentUserId="current"
    />
  );
}

export default ChatDetails;
