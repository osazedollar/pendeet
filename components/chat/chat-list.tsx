"use client";
import { useState } from "react";
import { BsChatDots } from "react-icons/bs";
import SearchBox from "@/ui/SearchBox";
import Button from "@/ui/Button";
import { IoArrowBackOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import ChatListItem from "./chat-list-item";
import ActiveChatItem from "./active-chat-item";

interface ChatListProps {
  conversations: Conversation[];
  activeConversationId?: string;
  onUserSelect: (userId: string) => void;
}

export default function ChatList({
  conversations,
  activeConversationId,
  onUserSelect,
}: ChatListProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConversations = conversations.filter(
    (conv) =>
      conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside className="flex flex-col flex-1 lg:border-r border-gray-200 h-dvh">
      {/* Search and New Chat */}
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-2">
          <button
            className="flex-center text-lg rounded-full size-8  text-primary duration-300 border-3 border-primary shadow-[0_2px_2px_#9c27b0] hover:shadow-[0_4px_4px_#9c27b0] hover:bg-primary hover:text-white focus:scale-[0.98] hover:-translate-y-1 peer"
            onClick={() => router.back()}
          >
            <IoArrowBackOutline />
          </button>
          <h2 className="text-xl font-bold">Messages</h2>
        </div>
        <div className="flex gap-3">
          <SearchBox
            placeholder="Search messages"
            setQuery={setSearchQuery}
            className="flex-1"
          />
          <Button
            variant="primary"
            size="regular"
            config={{ className: "whitespace-nowrap text-xs!" }}
          >
            New Chat
          </Button>
        </div>
      </div>

      {/* Online Users */}
      <div className="px-4 pb-4">
        <ul className="flex gap-3 lg:gap-4 overflow-x-auto scrollbar-hide">
          {conversations.slice(0, 4).map((conv) => (
            <ActiveChatItem
              key={conv.id}
              user={conv}
              onUserSelect={onUserSelect}
              activeConversationId={activeConversationId}
            />
          ))}
        </ul>
      </div>

      {/* Conversations List */}
      <ul className="flex-1 space-y-1 overflow-y-auto px-2 duration-200 pb-2">
        {filteredConversations.length === 0 ? (
          <li className="flex flex-col items-center justify-center h-full p-6 text-center">
            <BsChatDots className="text-5xl text-gray-300 mb-3" />
            <p className="text-gray-500">No conversations found</p>
            <p className="text-sm text-gray-400 mt-1">
              Try a different search term
            </p>
          </li>
        ) : (
          filteredConversations.map((conv) => (
            <ChatListItem
              key={conv.id}
              onUserSelect={onUserSelect}
              user={conv}
              activeConversationId={activeConversationId}
            />
          ))
        )}
      </ul>
    </aside>
  );
}
