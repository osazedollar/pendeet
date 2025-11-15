declare interface ChatMessage {
  id: string;
  content: string;
  timestamp: string;
  senderId: string;
  senderName: string;
  senderAvatar?: string;
  type: "text" | "image";
  imageUrl?: string;
  imageCaption?: string;
  isOwn: boolean;
}

declare interface Conversation {
  id: string;
  name: string;
  username: string;
  avatar: string | StaticImport;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  isOnline: boolean;
}

declare interface ChatPageProps {
  conversations: Conversation[];
  activeConversation?: Conversation;
  messages: ChatMessage[];
  currentUserId: string;
}

declare interface ChatListItemProps {
  user: Conversation;
  activeConversationId?: string;
  onUserSelect: (userId: string) => void;
}
